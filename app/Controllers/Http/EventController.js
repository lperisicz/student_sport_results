'use strict'

const Event = use("App/Models/Event")

class EventController {

  async create({request, response}) {
    let payload = request.post();
    let created = await Event.create(payload)
    response.send({
      data: created
    })
  }

  async delete({params, response}) {
    await Event
      .query()
      .where('id', '=', params.id)
      .delete()
    response.send({
      data: {}
    })
  }

}

module.exports = EventController
