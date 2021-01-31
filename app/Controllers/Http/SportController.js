'use strict'
const Sport = use("App/Models/Sport")

class FacultyController {

  async create({request, response}) {
    let payload = request.post();
    let created = await Sport.create(payload)
    response.send({
      data: created
    })
  }

  async filter({response}) {
    response.send({
      data: await Sport.all()
    })
  }

  async delete({params, response}) {
    await Sport
      .query()
      .where('id', '=', params.id)
      .delete()
    response.send({
      data: {}
    })
  }

}

module.exports = FacultyController
