'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {
  static get dates() {
    return ['created_at', 'updated_at', 'valid_until']
  }

  users() {
    return this.belongsTo('App/Models/User')
  }

  products() {
    return this.belongsTo('App/Models/Product')
  }

  orders() {
    return this.belongsTo('App/Models/Order')
  }
}

module.exports = Coupon
