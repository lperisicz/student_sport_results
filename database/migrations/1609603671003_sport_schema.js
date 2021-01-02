'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SportSchema extends Schema {
  up () {
    this.create('sports', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.integer('minPlayers').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sports')
  }
}

module.exports = SportSchema
