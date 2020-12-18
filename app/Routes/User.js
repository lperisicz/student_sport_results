'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  Route.get('/all', 'UserController.all')

  /**
   * @api {post} /api/users/login login
   * @apiGroup User
   *
   * @apiDescription Public route to login user
   *
   * @apiParam {string} email Users email
   * @apiParam {string} password Users password
   *
   */
  Route.post('/login', 'UserController.login')

})
