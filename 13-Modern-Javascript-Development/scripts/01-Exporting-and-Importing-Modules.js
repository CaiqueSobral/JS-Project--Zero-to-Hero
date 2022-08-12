// Importing module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qty);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

console.log('Importing module');

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 4);
add('olives', 8);
add('apples', 5);
add('bananas', 1);

console.log(cart);
