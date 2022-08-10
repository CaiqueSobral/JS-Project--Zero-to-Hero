'use strict';

////////////////////////////////////////////////////////////
//////////////////  CLASSES INHERITANCE  ///////////////////
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

class Student extends Person {
  constructor(fullName, birthear, course) {
    super(fullName, birthear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName}, and I study ${this.course}`);
  }

  greet() {
    console.log(`Hey, I'm a Student`);
  }
}

const caique = new Student('Caique Sobral', 2001, 'Computer Science');

console.log(caique);
caique.greet();
caique.introduce();

//==========================================================
//==========================================================
