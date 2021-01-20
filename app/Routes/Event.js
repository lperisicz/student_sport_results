'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  /**
   * @api {post} /api/events/create create
   * @apiGroup Event
   *
   * @apiDescription Public route create a single event
   *
   * @apiParam {integer} match_id Id of match for new event
   * @apiParam {integer} team_id Id of team for new event
   * @apiParam {integer} player_id Id of player for new event
   * @apiParam {string = "goal", "yellow_card", "red_card", "penalty_kick"} type Type of event
   * @apiParam {integer} time Time of event in milliseconds
   * @apiParam {integer} interval Interval of event eg. 1 -> First half
   *
   */
  Route.post('/create', 'EventController.create')

})
