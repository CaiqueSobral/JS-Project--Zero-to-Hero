'use strict';

////////////////////////////////////////////////////////////
//////////////////  CLASSES INHERITANCE  ///////////////////
////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi, my name is ${this.firstName} and I study ${this.course}`);
};

const caique = Object.create(StudentProto);
caique.init('Caique', 2001, 'Computer Science');
console.log(caique);
caique.introduce();
//==========================================================
//==========================================================
