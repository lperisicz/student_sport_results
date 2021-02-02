'use strict'
const Team = use("App/Models/Team")
const Player = use("App/Models/Player")

class TeamController {

  async create({request, response}) {

    let payload = request.post()

    let team = await Team.create(request.only(['name', 'faculty_id', 'sport_id']))

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

  async filter({response}) {
    response.send({
      data: await Team
        .query()
        .with('players')
        .with('faculty')
        .fetch()
    })
  }

  async delete({params, response}) {
    console.log("id. ", params.id)
    await Team
      .query()
      .where('id', '=', params.id)
      .delete()
    response.send({
      data: {}
    })
  }

  async removePlayer({params, response}) {
    console.log('PLAYER ID. ', params.playerId)
    await Player
      .query()
      .where('id', params.playerId)
      .update({team_id: null})
    response.send({
      data: {}
    })
  }

}

module.exports = TeamController
