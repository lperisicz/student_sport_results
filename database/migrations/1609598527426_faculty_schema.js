'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacultySchema extends Schema {
  up () {
    this.create('faculties', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.string('city', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('faculties')
  }
}

module.exports = FacultySchema
