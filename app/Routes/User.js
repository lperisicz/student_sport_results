'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  Route.get('/all', 'UserController.all')

  Route.post('/login', 'UserController.login')

})
