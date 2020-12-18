'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Team extends Model {

  players() {
    return this.hasMany('App/Model/Player', 'id', 'team_id')
  }

}

module.exports = Team
