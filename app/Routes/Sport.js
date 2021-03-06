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

  /**
   * @api {get} /api/sports/filter filter
   * @apiGroup Sport
   *
   * @apiDescription Public route lists all sports
   *
   *
   */
  Route.get('/filter', 'SportController.filter')

  /**
   * @api {delete} /api/sports/delete/:id delete
   * @apiGroup Sport
   *
   * @apiDescription Public route for deleting sport
   *
   */
  Route.delete('/delete/:id', 'SportController.delete')

})
