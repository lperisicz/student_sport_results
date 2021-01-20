'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sport extends Model {

  teams() {
    return this.hasMany('App/Models/Team', 'id', 'sport_id')
  }

}

module.exports = Sport
