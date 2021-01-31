'use strict'
const Player = use("App/Models/Player")

class PlayerController {

  async filter({response}) {
    response.send({
      data: await Player.all()
    })
  }

  async test({response}) {
    response.send("<!DOCTYPE html>\n" +
      "<html>\n" +
      "<body>\n" +
      "\n" +
      "<h1>!!</h1>\n" +
      "\n" +
      "</body>\n" +
      "</html>")
  }

  async create({request, response}) {
    let payload = request.post();
    let created = await Player.create(payload)
    response.send({
      data: created
    })
  }

  async delete({params, response}) {
    await Player
      .query()
      .where('id', '=', params.id)
      .delete()
    response.send({
      data: {}
    })
  }

}

module.exports = PlayerController
