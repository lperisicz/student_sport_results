'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {

  player() {
    return this.hasOne('App/Models/Player', 'player_id', 'id')
  }

  team() {
    return this.hasOne('App/Models/Team', 'team_id', 'id')
  }

}

module.exports = Event
