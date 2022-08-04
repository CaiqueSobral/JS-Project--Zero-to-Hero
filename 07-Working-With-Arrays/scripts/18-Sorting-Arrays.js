('use strict');

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// DO NOT WORK console.log(movements.sort());
// THE SORT METHOD WORKS WITH STRINGS, WITH NUMBERS IT CONVERTS THEM BACK
// TO STRINGS TO SORT THE NUMBERS AS STRINGS

// return < 0 -> A, B - Keep the order
// return < 0 -> B, A - Switch order

// ASCENDING
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

// DESCENDING
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);

// NOW IN A BETTER WAY

// ACSENDING
movements.sort((a, b) => a - b);
console.log(movements);

// DESCENDING
movements.sort((a, b) => b - a);
console.log(movements);
