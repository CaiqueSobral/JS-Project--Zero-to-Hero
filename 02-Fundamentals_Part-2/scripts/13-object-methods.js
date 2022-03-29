"use strict";

const caique = {
  firstName: "Caique",
  lastName: "Sobral",
  birthYear: 2001,
  job: "Programmer",
  friends: ["Japa", "Kaue", "Marcos"],
  hasDriverLicense: false,

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job} 
    and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(caique.calcAge());

console.log(caique.age);
console.log(caique.age);
console.log(caique.age);

console.log(caique.getSummary());
