'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Match extends Model {

  sport() {
    return this.hasOne('App/Models/Sport', 'sport_id', 'id')
  }

  teamOne() {
    return this.hasOne('App/Models/Team', 'team_one', 'id')
  }

  teamTwo() {
    return this.hasOne('App/Models/Team', 'team_two', 'id')
  }

}

module.exports = Match
