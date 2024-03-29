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

// const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Blocks the execution
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Blocks the execution
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
//lastPost.then((val) => console.log(val));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept;
}

class Person {
  greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const caique = new Person('Caique');
console.log('Caique' ?? null);

console.log(cart.find((el) => el.quantity >= 2));

import 'core-js/stable';
// import 'core-js/stable/array/find';

// Polifilling async functions
import 'regenerator-runtime/runtime';
