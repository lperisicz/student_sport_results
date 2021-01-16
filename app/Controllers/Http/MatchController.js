'use strict'
const Match = use("App/Models/Match")

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

    response.send({
      data: await Match
        .query()
        .where('id', matchId)
        .with('sport')
        .with('teamOne')
        .with('teamTwo')
        .fetch()
    })
  }

}

module.exports = MatchController
