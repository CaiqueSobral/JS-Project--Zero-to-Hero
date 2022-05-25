'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Looping over an array
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------------- FOREACH ----------------');
// Using forEach for looping over the array
movements.forEach(function (
  mov /*This parameter is the current value*/,
  i /*This parameter is the current value index*/,
  arr /*This parameter is the complete array*/
) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
