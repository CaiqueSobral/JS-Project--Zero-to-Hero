'use strict';

////////////////////////////////////////////////////////////
////////////////////  STATIC METHODS  //////////////////////
////////////////////////////////////////////////////////////

class Person {
  constructor(fullName, birthear) {
    this.fullName = fullName;
    this.birthear = birthear;
  }

  // Methods will be added to .prototype
  calcAge() {
    console.log(2022 - this.birthear);
  }

  greet() {
    console.log('Hey');
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey');
    console.log(this);
  }
}

// Declarin a static method
// Person.hey = function () {
//   console.log('hey');
// };

Person.hey();

const caique = new Person('Caique Sobral', 2001);
console.log(caique.fullName);
//==========================================================
//==========================================================
