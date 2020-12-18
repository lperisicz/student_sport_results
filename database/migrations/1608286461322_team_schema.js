'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamSchema extends Schema {
  up () {
    this.create('teams', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('faculty', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('teams')
  }
}

module.exports = TeamSchema
