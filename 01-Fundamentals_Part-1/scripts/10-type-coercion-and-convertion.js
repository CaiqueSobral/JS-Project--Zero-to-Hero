// Type convertion
const inputYear = "1991";
console.log(inputYear + 18);

console.log(Number(inputYear), inputYear);
console.log(Number("Jonas")); //Error: NaN = Not an Number
console.log(String(32), 32);

// Type coercion
console.log("I'am " + 23 + " years old"); // + convert to string
console.log("23" - "10" - 3); // - convert to number
console.log("20" * "10"); // * convert to number
console.log("20" / "2"); // / convert to number

let n = "1" + 1; //start as string
n = n - 1; //convert to a number
console.log(n); // finish as a number
