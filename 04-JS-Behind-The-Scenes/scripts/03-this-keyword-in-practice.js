"use strict";

console.log(this); // window object

const calcAge = function (birthyear) {
  console.log(2022 - birthyear);
  console.log(this); // undefined
};
calcAge(2001);

const calcAgeArrow = (birthyear) => {
  //Arrow function don't have a "THIS" keyword
  console.log(2022 - birthyear);
  console.log(this); // Will point to the "this" of the parent
};
calcAgeArrow(2001);

const caique = {
  year: 2001,
  calcAge: function () {
    console.log(this); // Points to the caller of the method
    console.log(2022 - this.year);
  },
};
caique.calcAge();

const japa = {
  year: 1998,
};

japa.calcAge = caique.calcAge;
japa.calcAge(); // works because japa is the new caller
