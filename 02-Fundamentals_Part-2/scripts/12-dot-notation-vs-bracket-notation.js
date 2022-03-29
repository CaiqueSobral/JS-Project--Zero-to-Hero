"use strict";

const caique = {
  firstName: "Caique",
  lastName: "Sobral",
  age: 2022 - 2001,
  job: "Programmer",
  friends: ["Japa", "Kaue", "Marcos"],
};

console.log(caique);

// retrieves data from the object
console.log(caique.lastName);
console.log(caique["lastName"]); // CAN USE EXPRESSIONS

const nameKey = "Name";
console.log(caique["first" + nameKey]);
console.log(caique["last" + nameKey]);

//console.log(caique."last" + nameKey) // ERROR

// const interestedIn = prompt(
//   "What do you want to know about Caique? Choose between firstName, lastName, age, job, and friends."
// );

// if (caique[interestedIn]) {
//   console.log(caique[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends."
//   );
// }

caique.location = "Brazil";
caique["twitter"] = "@CaiqueSobral";
console.log(caique);

console.log(
  `${caique.firstName} has ${caique.friends.length} friends, and his best friend is ${caique.friends[0]}.`
);
