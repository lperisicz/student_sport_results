'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  /**
   * @api {get} /api/players/filter filter
   * @apiGroup Player
   *
   * @apiDescription Public route lists all players
   *
   */
  Route.get('/filter', 'PlayerController.filter')

  Route.get('/test', 'PlayerController.test')

  /**
   * @api {post} /api/players/create create
   * @apiGroup Player
   *
   * @apiDescription Public route create a single player
   *
   * @apiParam {string} name Players full name
   *
   */
  Route.post('/create', 'PlayerController.create')

  /**
   * @api {delete} /api/players/delete/:id delete
   * @apiGroup Player
   *
   * @apiDescription Public route for deleting player
   *
   */
  Route.delete('/delete/:id', 'PlayerController.delete')

})
