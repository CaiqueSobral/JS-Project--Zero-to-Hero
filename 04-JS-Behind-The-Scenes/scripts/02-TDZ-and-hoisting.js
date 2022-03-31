"use strict";

console.log(me); // Undefined
console.log(job); // Error: not initialized
console.log(year); // Error: not initialized

var me = "Caique";
let job = "programmer";
const year = 2001;

console.log(addDecl(2, 3)); // OK TO USE FUNCTIONS BEFORE DECLARATION
console.log(addExpr(2, 3)); // CANNOT ACESS BEFORE INITIALIZATION
console.log(addArrow(2, 3)); // CANNOT ACESS BEFORE INITIALIZATION

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
