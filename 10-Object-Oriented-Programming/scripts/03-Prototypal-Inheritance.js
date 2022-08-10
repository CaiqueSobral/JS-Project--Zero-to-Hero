'use strict';

////////////////////////////////////////////////////////////
/////////////////  CONSTRUCTOR FUNCTION  ///////////////////
////////////////////////////////////////////////////////////

const Person = function (firstName, birthear) {
  this.firstName = firstName;
  this.birthear = birthear;

  // Never create methods in constructor functions
  // this.calcAge = function () {
  //   console.log(2022 - this.birthear);
  // };
};

const caique = new Person('Caique', 2001);
const japa = new Person('Japa', 1998);
const kassino = new Person('Kassino', 1998);
const jonas = new Person('Jonas', 2010);

console.log(kassino, caique);
// {} = object
// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(caique instanceof Person); // True

//==========================================================
//==========================================================

////////////////////////////////////////////////////////////
//////////////////////  PROTOTYPES  ////////////////////////
////////////////////////////////////////////////////////////

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthear);
};

caique.calcAge();
japa.calcAge();

console.log(caique.__proto__);
console.log(caique.__proto__ === Person.prototype); // True

Person.prototype.species = 'Homo Sapiens';
console.log(caique.species, kassino.species);
//==========================================================
//==========================================================

////////////////////////////////////////////////////////////
/////////////////  PROTOTYPAL INHERITANCE  /////////////////
////////////////////////////////////////////////////////////

console.log(caique.__proto__);
console.log(caique.__proto__.__proto__);
console.log(caique.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [
  1, 2, 3, 4, 5, 6, 7, 78, 1, 1, 1, 3, 3, 5, 6512, 221, 34, 232, 232, 3, 23, 23,
  32, 32, 23,
];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

// Do not do this --- Not a good idea
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir((x) => x + 1);
//==========================================================
//==========================================================
