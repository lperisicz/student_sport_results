'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
_requireRoutes('User').prefix('api/users')
_requireRoutes('Player').prefix('api/players')
_requireRoutes('Team').prefix('api/teams')
_requireRoutes('Faculty').prefix('api/faculties')
_requireRoutes('Sport').prefix('api/sports')
_requireRoutes('Match').prefix('api/matches')
_requireRoutes('Event').prefix('api/events')

function _requireRoutes(group) {
  return require(`../app/Routes/${group}`)
}
