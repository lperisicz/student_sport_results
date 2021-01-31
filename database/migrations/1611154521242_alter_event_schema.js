'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterEventSchema extends Schema {

  /*up() {
    this.raw(`
    CREATE TYPE event_types AS ENUM ('goal', 'yellow_card', 'red_card', 'penalty_kick', 'game_end');
    ALTER TABLE events
      ALTER COLUMN type DROP DEFAULT,
      ALTER COLUMN type TYPE event_types USING type::text::event_types;
    DROP TYPE IF EXISTS type;
    ALTER TYPE event_types RENAME TO events_type_check;
  `);
  }*/

  up () {
    this.table('events', (table) => {
      // alter table
      /*table.enum('type', [
        'goal', 'yellow_card', 'red_card', 'penalty_kick', 'game_end'
      ]).alter();*/

      table.dropColumn('type')

    })
  }

  down() {
    this.table('events', (table) => {
      // reverse alternations
      table.enum('type', [
        'goal', 'yellow_card', 'red_card', 'penalty_kick'
      ])
    })
  }
}

module.exports = AlterEventSchema
