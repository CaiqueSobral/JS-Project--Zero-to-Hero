"use strict";

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`); // Will run
    return retirement;
    console.log(`${firstName} retires in ${retirement} years`); // Will not run
  } else {
    console.log(`${firstName} has already retired`); // Will run
    return -1;
    console.log(`${firstName} has already retired`); // Will not run
  }
};

console.log(yearsUntilRetirement(2001, "Caique"));
console.log(yearsUntilRetirement(1970, "Mike"));
