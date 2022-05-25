'use strict';

const arr = [23, 11, 64];
console.log(arr[0]); // Do the same thing
console.log(arr.at(0)); // Do the same thing

console.log(arr[arr.length - 1]); // Take the last element
console.log(arr.slice(-1)[0]); // Take the last element
console.log(arr.at(-1)); // Take the last element

console.log('Caique'.at(0));
console.log('Caique'.at(-1));
