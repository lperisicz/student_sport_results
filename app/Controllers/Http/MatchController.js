'use strict'
const Match = use("App/Models/Match")
const Event = use("App/Models/Event")

class MatchController {

  async create({request, response}) {
    let payload = request.post();
    let created = await Match.create(payload)
    response.send({
      data: created
    })
  }

  async get({params, response}) {

    const matchId = params.matchId;

    let match = await Match
      .query()
      .where('id', matchId)
      .with('sport')
      .with('teamOne')
      .with('teamOne.players')
      .with('teamTwo')
      .with('teamTwo.players')
      .with('events')
      .first()

    console.log(JSON.stringify(match));

    let scoreOne = await Event
      .query()
      .where('team_id', match.team_one)
      .count('* as scoreOne')

    scoreOne = scoreOne[0].scoreOne

    let scoreTwo = await Event
      .query()
      .where('team_id', match.team_two)
      .count('* as scoreTwo')

    scoreTwo = scoreTwo[0].scoreTwo


    match.score = `${scoreOne} : ${scoreTwo}`

    response.send({
      data: match
    })
  }

  async filter({params, response}) {
    const sportId = params.sportId;

    let matches = await Match
      .query()
      .where('sport_id', sportId)
      .with('sport')
      .with('teamOne')
      .with('teamTwo')
      .with('events')
      .fetch()

    let matchesJSON = matches.toJSON()

    for(let i = 0; i < matches.size(); i++) {
      let match = matchesJSON[i]
      let scoreOne = await Event
        .query()
        .where('team_id', match.team_one)
        .count('* as scoreOne')

      scoreOne = scoreOne[0].scoreOne

      let scoreTwo = await Event
        .query()
        .where('team_id', match.team_two)
        .count('* as scoreTwo')

      scoreTwo = scoreTwo[0].scoreTwo
      match.score = `${scoreOne} : ${scoreTwo}`
      matchesJSON[i] = match
    }

    response.send({
      data: matchesJSON
    })
  }

}

module.exports = MatchController
