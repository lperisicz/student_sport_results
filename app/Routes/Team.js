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
   * @apiParam {int} faculty_id Faculty id
   * @apiParam {int} sport_id Sport id
   * @apiParam {int[]} players Ids of players to assign in team
   *
   */
  Route.post('/create', 'TeamController.create')

  /**
   * @api {get} /api/teams/filter filter
   * @apiGroup Team
   *
   * @apiDescription Public route for getting all teams
   *
   *
   */
  Route.get('/filter', 'TeamController.filter')

  /**
   * @api {delete} /api/teams/delete/:id delete
   * @apiGroup Team
   *
   * @apiDescription Public route for deleting team
   *
   */
  Route.delete('/delete/:id', 'TeamController.delete')

  /**
   * @api {patch} /api/teams/:teamId/remove-player/:playerId removePlayer
   * @apiGroup Team
   *
   * @apiDescription Public route for removing player from team
   *
   */
  Route.patch('/remove-player/:playerId', 'TeamController.removePlayer')

})
