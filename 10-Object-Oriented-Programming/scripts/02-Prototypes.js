'use strict';

////////////////////////////////////////////////////////////
/////////////////  CONSTRUCTOR FUNCTION  ///////////////////
////////////////////////////////////////////////////////////

const Person = function (firstName, birthear) {
  this.firstName = firstName;
  this.birthear = birthear;
};

const caique = new Person('Caique', 2001);

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

console.log(caique.__proto__);
console.log(caique.__proto__ === Person.prototype); // True

Person.prototype.species = 'Homo Sapiens';
console.log(caique.species);
//==========================================================
//==========================================================
