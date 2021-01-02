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

}

module.exports = FacultyController
