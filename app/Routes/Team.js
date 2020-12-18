'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  /**
   * @api {post} /api/teams/create create
   * @apiGroup Team
   *
   * @apiDescription Public route create a team
   *
   * @apiParam {string} name Team name
   * @apiParam {string} faculty Faculty full name
   * @apiParam {int[]} players Ids of players to assign in team
   *
   */
  Route.post('/create', 'TeamController.create')

})
