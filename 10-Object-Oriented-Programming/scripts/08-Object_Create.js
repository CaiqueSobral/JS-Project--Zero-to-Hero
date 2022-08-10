'use strict';

////////////////////////////////////////////////////////////
////////////////////  OBJECT.CREATE  ///////////////////////
////////////////////////////////////////////////////////////

class Person {
  constructor(fullName, birthear) {
    this.fullName = fullName;
    this.birthear = birthear;
  }

  // calcAge() {
  //   console.log(2022 - this.birthear);
  // }

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
}

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthear);
  },

  init(firstName, birthear) {
    this.firstName = firstName;
    this.birthear = birthear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // Empty object
steven.name = 'Steven';
steven.birthear = 2001;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);

sarah.calcAge();
//==========================================================
//==========================================================
