'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  //categories resource routes
  Route.resource('categories', 'CategoryController').apiOnly()

  //products resource routes
  Route.resource('products', 'ProductController').apiOnly()

  //coupons resource routes
  Route.resource('coupons', 'CouponController').apiOnly()

  //order resource routes
  Route.resource('orders', 'OrderController').apiOnly()

  //image resource routes
  Route.resource('images', 'ImageController').apiOnly()

  //user resource routes
  Route.resource('users', 'UserController').apiOnly()

}).prefix('v1/admin').namespace('Admin')
