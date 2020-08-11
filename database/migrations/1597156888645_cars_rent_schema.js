'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarsRentSchema extends Schema {
  up () {
    this.create('cars_rent', (table) => {
      table.increments()
      table.integer('car_id',5)
      table.enu('rent_status','Returned','Renting')
      table.datetime('rent_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('cars_rents')
  }
}

module.exports = CarsRentSchema
