'use strict';

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// Makes no sense
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(398723409852740598237450928347520394n);
console.log(BigInt(234238));

// Operations
console.log(10000n + 10000n);
console.log(29837542103948572304958n * 211231n);

const huge = 2192384102394817239423n;
const num = 23;
//console.log(huge * num); // Can't mix BigInts and regular Integers

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); //bigint
console.log(20n == '20'); // true

console.log(huge + ' is REALLY big!!!'); // prints the string

// Divisions
console.log(11n / 3n); // rounds to the closest number
console.log(10 / 3); // Shows the exact number
