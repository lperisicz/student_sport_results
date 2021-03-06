'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

module.exports = Route.group(() => {

  /**
   * @api {post} /api/faculties/create create
   * @apiGroup Faculty
   *
   * @apiDescription Public route create a single faculty
   *
   * @apiParam {string} name Faculty full name
   * @apiParam {string} city City name
   *
   */
  Route.post('/create', 'FacultyController.create')

  /**
   * @api {get} /api/faculties/filter filter
   * @apiGroup Faculty
   *
   * @apiDescription Public route lists all faculties
   *
   */
  Route.get('/filter', 'FacultyController.filter')

  /**
   * @api {delete} /api/faculties/delete/:id delete
   * @apiGroup Faculty
   *
   * @apiDescription Public route for deleting faculty
   *
   */
  Route.delete('/delete/:id', 'FacultyController.delete')

})
