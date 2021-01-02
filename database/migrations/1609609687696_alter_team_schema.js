'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTeamSchema extends Schema {
  up () {
    this.table('teams', (table) => {
      // alter table
      table.integer('sport_id')
    })
  }

  down () {
    this.table('teams', (table) => {
      // reverse alternations
      table.dropColumn('sport_id')
    })
  }
}

module.exports = AlterTeamSchema
