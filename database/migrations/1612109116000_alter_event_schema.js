'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.table('events', (table) => {
      // alter table
      table.string('type')
    })
  }

  down () {
    this.table('events', (table) => {
      // reverse alternations
      table.dropColumn('type')
    })
  }
}

module.exports = EventSchema
