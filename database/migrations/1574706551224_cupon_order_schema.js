'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponOrderSchema extends Schema {
  up () {
    this.create('cupon_order', (table) => {
      table.increments()
      table.integer('coupon_id').usingned()
      table.integer('order_id').usingned()
      table.decimal('discount',12, 2).defaultTo(0.0)

      table.foreign('coupon_id').references('id').inTable('coupons').onDelete('cascade').onUpdate('cascade')
      table.foreign('order_id').references('id').inTable('orders').onDelete('cascade').onUpdate('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('cupon_order')
  }
}

module.exports = CuponOrderSchema
