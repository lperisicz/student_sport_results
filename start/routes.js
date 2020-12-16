'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
_requireRoutes('User').prefix('api/users')
_requireRoutes('Player').prefix('api/players')

function _requireRoutes(group) {
  return require(`../app/Routes/${group}`)
}
