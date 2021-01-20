'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.integer('match_id')
      table.enum('type', [
        'goal', 'yellow_card', 'red_card', 'penalty_kick'
      ])
      table.integer('team_id')
      table.integer('player_id')
      table.integer('time')
      table.integer('interval')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
