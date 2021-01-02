'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  /**
   * @api {post} /api/sports/create create
   * @apiGroup Sport
   *
   * @apiDescription Public route create a single sport
   *
   * @apiParam {string} name Unique sport name
   * @apiParam {integer} minPlayers Min number of players for sport
   *
   */
  Route.post('/create', 'SportController.create')

})
