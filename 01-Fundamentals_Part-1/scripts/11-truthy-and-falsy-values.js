// Falsy: Will become false if converted to bollean
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Caique")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0;

if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job.");
}

let height = 0; //Bug: the heigh is defined but will be false in the if statement
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Heigh is undefined");
}