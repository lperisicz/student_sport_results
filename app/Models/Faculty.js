'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Faculty extends Model {

  teams() {
    return this.hasMany('App/Models/Team', 'id', 'faculty_id')
  }

}

module.exports = Faculty
