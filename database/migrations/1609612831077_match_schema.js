'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatchSchema extends Schema {
  up() {
    this.create('matches', (table) => {
      table.increments()
      table.integer('sport_id')
      table.integer('team_one')
      table.integer('team_two')
      table.timestamp('date').notNullable();
      table.timestamps()
    })
  }

  down() {
    this.drop('matches')
  }
}

module.exports = MatchSchema
