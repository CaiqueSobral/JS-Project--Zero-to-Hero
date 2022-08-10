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
