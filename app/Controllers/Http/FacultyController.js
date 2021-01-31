'use strict'
const Faculty = use("App/Models/Faculty")

class FacultyController {

  async create({request, response}) {
    let payload = request.post();
    let created = await Faculty.create(payload)
    response.send({
      data: created
    })
  }

  async filter({response}) {
    response.send({
      data: await Faculty.all()
    })
  }

  async delete({params, response}) {
    await Faculty
      .query()
      .where('id', '=', params.id)
      .delete()
    response.send({
      data: {}
    })
  }

}

module.exports = FacultyController
