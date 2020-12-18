'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  /**
   * @api {get} /api/users/all Index
   * @apiGroup User
   *
   * @apiDescription Public route to list all users
   *
   */
  Route.get('/all', 'UserController.all')

  Route.post('/login', 'UserController.login')

})
