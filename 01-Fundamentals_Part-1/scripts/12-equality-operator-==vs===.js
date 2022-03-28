const age = 18;

if (age === 18) console.log("You just became an adult");

console.log(18 === 18); // TRUE
console.log("18" === 18); // FALSE
console.log("18" == 18); // TRUE

// === does not do type coercion
// == DO type coercion

// USE ===

const favouriteNumber = Number(prompt("What's your favorite number? "));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favouriteNumber === 7) {
  console.log("7 is also a cool number");
} else if (favouriteNumber === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favouriteNumber !== 23) {
  console.log("Why not 23?");
}
