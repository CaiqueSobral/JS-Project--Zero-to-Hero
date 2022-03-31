"use strict";

let age = 30;
let oldAge = 30;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Caique",
  age: 30,
};

const friend = me;
friend.age = 27;
console.log("friend: ", friend);
console.log("me", me);
