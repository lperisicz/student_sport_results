'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  Route.get('/filter', 'PlayerController.filter')

  Route.get('/test', 'PlayerController.test')

})
