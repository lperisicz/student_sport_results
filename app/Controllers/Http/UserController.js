'use strict'
const User = use('App/Models/User')

class UserController {

  async all({response}) {
    console.log("call")
    const users = await User.all()
    console.log(users)
    response.send(users)
  }

  async login({response}) {
    let responseDummyData = {
      data: {
        user: {
          username: 'baja1234',
          email: 'smallpipi@gmail.com',
          role: 'admin'
        }
      }
    }
    response.send(responseDummyData)
  }

}

module.exports = UserController
