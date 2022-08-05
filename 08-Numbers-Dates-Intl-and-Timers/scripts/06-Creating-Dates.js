'use strict';

const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // Month is 0 based so November = 10
console.log(future.getDate()); // Return the month day
console.log(future.getDay()); // Returns the week day
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // Useful to store
console.log(future.getTime()); // return the milliseconds

console.log(Date.now()); // Returns the actual date in milliseconds

future.setFullYear(2040);
console.log(future);
