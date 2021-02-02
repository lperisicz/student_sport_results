'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Team extends Model {

  players() {
    return this.hasMany('App/Models/Player', 'id', 'team_id')
  }

  faculty() {
    return this.hasOne('App/Models/Faculty', 'faculty_id', 'id')
  }

}

module.exports = Team
