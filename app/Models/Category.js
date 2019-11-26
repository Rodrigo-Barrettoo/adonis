'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  // relacionamento entre Categoria e Image de Destaque
  image() {
    return this.belongsTo('App/Models/Image')
  }

  // relacionamento entre Categoria e Products
  products() {
    return this.belongsTo('App/Models/Product')
  }

}

module.exports = Category
