'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.timestamps()
      table.string("name")
      table.integer("age")
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
