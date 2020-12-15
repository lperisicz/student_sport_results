'use strict'
const User = use('App/Models/User')

class UserController {

  async all({response}) {
    console.log("call")
    const users = await User.all()
    console.log(users)
    response.send(users)
  }

}

module.exports = UserController
