'use strict'
const User = use('App/Models/User')

class UserController {

  async all({response}) {
    console.log("call")
    const users = await User.all()
    console.log(users)
    response.send(users)
  }

  async login({request, response}) {
    response.send({
      data: {
        user: `${request.post().email.split("@")[0]}123`,
        email: request.post().email,
        role: 'admin'
      }
    })
  }

}

module.exports = UserController
