'use strict'
const Team = use("App/Models/Team")
const Player = use("App/Models/Player")

class TeamController {

  async create({request, response}) {

    let payload = request.post()

    let team = await Team.create(request.only(['name', 'faculty']))

    await Player
      .query()
      .where('id', 'in', payload.players)
      .update({team_id: team.id})

    team.players = await Player
      .query()
      .where('id', 'in', payload.players)
      .fetch()

    response.send({
      data: team
    })
  }

}

module.exports = TeamController
