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
      .with('teamOne.faculty')
      .with('teamTwo')
      .with('teamTwo.players')
      .with('teamTwo.faculty')
      .with('events', builder => {
        builder
          .with('player')
          .with('team')
          .orderBy('events.time', 'ASC')
      })
      .orderBy('date', 'DESC')
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
      .with('teamOne.players')
      .with('teamOne.faculty')
      .with('teamTwo')
      .with('teamTwo.players')
      .with('teamTwo.faculty')
      .with('events', builder => {
        builder
          .with('player')
          .with('team')
          .orderBy('events.time', 'ASC')
      })
      .orderBy('date', 'DESC')
      .fetch()

    let matchesJSON = matches.toJSON()

    for(let i = 0; i < matches.size(); i++) {
      let match = matchesJSON[i]
      let scoreOne = await Event
        .query()
        .where('match_id', match.id)
        .where('team_id', match.team_one)
        .where('type', 'goal')
        .count('* as scoreOne')

      let scoreOneDoubles = await Event
        .query()
        .where('match_id', match.id)
        .where('team_id', match.team_one)
        .where('type', 'field_goal')
        .count('* as scoreOneDoubles')

      let scoreOneTriples = await Event
        .query()
        .where('match_id', match.id)
        .where('team_id', match.team_one)
        .where('type', 'three_point_field_goal')
        .count('* as scoreOneTriples')

      scoreOne = parseInt(scoreOne[0].scoreOne) + (2 * parseInt(scoreOneDoubles[0].scoreOneDoubles)) + (3 * parseInt(scoreOneTriples[0].scoreOneTriples))

      let scoreTwo = await Event
        .query()
        .where('match_id', match.id)
        .where('team_id', match.team_two)
        .where('type', 'goal')
        .count('* as scoreTwo')

      let scoreTwoDoubles = await Event
        .query()
        .where('match_id', match.id)
        .where('team_id', match.team_two)
        .where('type', 'field_goal')
        .count('* as scoreTwoDoubles')

      let scoreTwoTriples = await Event
        .query()
        .where('match_id', match.id)
        .where('team_id', match.team_two)
        .where('type', 'three_point_field_goal')
        .count('* as scoreTwoTriples')

      scoreTwo = parseInt(scoreTwo[0].scoreTwo) + (2 * parseInt(scoreTwoDoubles[0].scoreTwoDoubles)) + (3 * parseInt(scoreTwoTriples[0].scoreTwoTriples))

      let gameFinishedEvent = await Event.query()
        .where('type', 'game_end')
        .where('match_id', match.id)
        .fetch()

      match.score = `${scoreOne} : ${scoreTwo}`
      match.gameFinished = gameFinishedEvent.toJSON().length > 0
      matchesJSON[i] = match
    }

    response.send({
      data: matchesJSON
    })
  }

  async delete({params, response}) {
    await Match
      .query()
      .where('id', '=', params.id)
      .delete()
    response.send({
      data: {}
    })
  }

}

module.exports = MatchController
