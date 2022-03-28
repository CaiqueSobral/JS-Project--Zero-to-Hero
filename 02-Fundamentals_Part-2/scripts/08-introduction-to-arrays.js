"use strict";

// INSTEAD OF THIS...
const friend1 = "Kaue";
const friend2 = "Marcos";
const friend3 = "japa";

// ...YOU CAN USE THIS
const friends = ["Kaue", "Marcos", "Japa"];
console.log(friends);

// ANOTHER WAY TO CREATE ARRAY
const y = new Array(2001, 2002, 2003, 2004);

// PRINT FIRST ELEMENT
console.log(friends[0]);
console.log(friends[2]);
// NUMBER OF ELEMENTS IN A ARRAY
console.log(friends.length);
// PRINT LAST ELEMENT IN ARRAY
console.log(friends[friends.length - 1]);

// CHANGE THE ELEMENT IN ARRAY
friends[2] = "Lucas";
console.log(friends);
//friends = ["Bob", "Alice"]; ERROR

const firstName = "Caique";
const caique = [firstName, "Sobral", 2022 - 2001, "programmer", friends];
console.log(caique);

// EXERCISE //
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
