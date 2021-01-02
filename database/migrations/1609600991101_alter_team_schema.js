'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTeamSchema extends Schema {
  up () {
    this.table('teams', (table) => {
      // alter table
      table.integer('faculty_id')
      table.dropColumn('faculty')
    })
  }

  down () {
    this.table('teams', (table) => {
      // reverse alternations
      table.dropColumn('faculty_id')
      table.string('faculty', 254).notNullable()
    })
  }
}

module.exports = AlterTeamSchema
