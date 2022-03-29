"use strict";

const caique = [
  "Caique",
  "Sobral",
  2022 - 2001,
  "Programmer",
  ["Japa", "Kaue", "Marcos"],
];

const types = [];

for (let i = 0; i < caique.length; i++) {
  console.log(caique[i], typeof caique[i]);

  // Filling the types array
  //types[i] = typeof caique[i];
  types.push(typeof caique[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// CONTINUE AND BRAKE
console.log("------- ONLY STRINGS --------");
for (let i = 0; i < caique.length; i++) {
  if (typeof caique[i] !== "string") continue; //skip if not a string
  console.log(caique[i], typeof caique[i]);
}

console.log("------- BREAK WOTH NUMBER --------");
for (let i = 0; i < caique.length; i++) {
  if (typeof caique[i] === "number") break; //leaves the loop if finds a number
  console.log(caique[i], typeof caique[i]);
}
