'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  /**
   * @api {post} /api/matches/create create
   * @apiGroup Match
   *
   * @apiDescription Public route create a single match
   *
   * @apiParam {integer} sport_id Sport id
   * @apiParam {integer} team_one Team one id
   * @apiParam {integer} team_two Team two id
   * @apiParam {string} date Time of match, format: "2020-12-18 17:04:46"
   *
   */
  Route.post('/create', 'MatchController.create')

  /**
   * @api {get} /api/matches/get/:matchId get
   * @apiGroup Match
   *
   * @apiDescription Public route get single match
   *
   * @apiParam {integer} matchId Match id
   *
   */
  Route.get('/get/:matchId', 'MatchController.get')

  /**
   * @api {get} /api/matches/filter/:sportId filter
   * @apiGroup Match
   *
   * @apiDescription Public route lists all matches for sport
   *
   * @apiParam {integer} sportId Sport id
   *
   */
  Route.get('/filter/:sportId', 'MatchController.filter')

  /**
   * @api {delete} /api/matches/delete/:id delete
   * @apiGroup Match
   *
   * @apiDescription Public route for deleting match
   *
   */
  Route.delete('/delete/:id', 'MatchController.delete')

})
