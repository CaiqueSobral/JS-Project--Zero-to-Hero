'use strict';

////////////////////////////////////////////////////////////
/////////////////  CLASSES INHERITANCE  ////////////////////
////////////////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

// const Student = function (firstName, birthYear, course) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;
// };

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Inheriting
  this.course = course;
};

// Need to be created before any prototype declaration
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, and I study ${this.course}`);
};

const caique = new Student('Caique', 2001, 'Computer Science');
caique.introduce();
caique.calcAge();

console.log(caique.__proto__);
console.log(caique.__proto__.__proto__);

console.log(caique instanceof Student);
console.log(caique instanceof Person);
console.log(caique instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//==========================================================
//==========================================================
