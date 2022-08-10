'use strict';

////////////////////////////////////////////////////////////
////////////////////  ES6 CLASSES  /////////////////////////
////////////////////////////////////////////////////////////

class PersonCl {
  constructor(firstName, birthear) {
    this.firstName = firstName;
    this.birthear = birthear;
  }

  // Methods will be added to .prototype
  calcAge() {
    console.log(2022 - this.birthear);
  }

  greet() {
    console.log('Hey');
  }
}
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executes in strict mode

// PersonCl.prototype.greet = function(){
//   console.log('Hey')
// }

const caiqueCL = new PersonCl('Caique', 2001);
console.log(caiqueCL);
caiqueCL.calcAge();
console.log(caiqueCL.__proto__ === PersonCl.prototype);

caiqueCL.greet();

//==========================================================
//==========================================================
