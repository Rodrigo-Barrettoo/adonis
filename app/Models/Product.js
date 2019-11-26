'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

  image() {
    return this.belongsTo('App/Models/Image')
  }


  // relacionamento entre Categoria e Image de Destaque
  // Galeria de imagens do produtos
  images() {
    return this.belongsTo('App/Models/Image')
  }

  // relacionamento entre Categoria e Produtos
  // Galeria de imagens do produtos
  categories() {
    return this.belongsTo('App/Models/Category')
  }

  // relacionamento entre Produtos e Cupons de desconto
  // Galeria de imagens do produtos
  coupons() {
    return this.belongsTo('App/Models/Coupon')
  }

}

module.exports = Product
