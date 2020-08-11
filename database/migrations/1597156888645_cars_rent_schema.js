'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarsRentSchema extends Schema {
  up () {
    this.create('cars_rents', (table) => {
      table.increments()
      table.int("car_id")
      table.enum("rent_status")
      table.datetime("rent_date")
      table.timestamps()
    })
  }

  down () {
    this.drop('cars_rents')
  }
}

module.exports = CarsRentSchema
