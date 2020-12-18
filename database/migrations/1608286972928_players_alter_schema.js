'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayersAlterSchema extends Schema {
  up () {
    this.table('players_alters', (table) => {
      // alter table
      table.integer('team_id')
    })
  }

  down () {
    this.table('players_alters', (table) => {
      // reverse alternations
      table.dropColumn('team_id')
    })
  }
}

module.exports = PlayersAlterSchema
