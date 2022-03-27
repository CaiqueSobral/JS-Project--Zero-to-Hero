/* let country = "Brazil";
let continent = "South America";
let population = "200.4 million";

console.log(
  `${country} is in ${continent} and has o population of ${population}`
);

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrantJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";
console.log(myFirstJob);

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof null);

let agr = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
const job;

var job = "Programmer";
job = "teacher";

lastName = "Sobral";
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Caique";
const lastName = "Sobral";

console.log(firstName + " " + lastName);

let x = 10 + 5; //15
x += 10; // x = x + 10 - 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);
*/

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const avarageAge = (46 + 19) / 2;
// console.log(46, 19, avarageAge);

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:

// 1. Store Mark's and John's mass and height in variables

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// GOOD LUCK �

// const markHeight = 1.88,
//   markMass = 95,
//   johnHeight = 1.76,
//   johnMass = 85;

// const markBMI = markMass / markHeight ** 2,
//   johnBMI = johnMass / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

const firstName = "Caique";
const job = "programmer";
const birthYear = 2001;
const currentYear = 2022;

const caique =
  "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job;

const caiqueNew = `I'm ${firstName} a ${
  currentYear - birthYear
} years old ${job}`;
console.log(caiqueNew);

console.log(`Just a regular string...`);

console.log(`String with
multiple
lines`);
