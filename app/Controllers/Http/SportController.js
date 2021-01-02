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

}

module.exports = FacultyController
