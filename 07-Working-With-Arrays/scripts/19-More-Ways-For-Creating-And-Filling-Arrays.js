('use strict');

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7); //Create an empty array with 7 blank spaces
console.log(x);
//console.log(x.map(() => 5)); // DO NOT WORK
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// CREATE AN ARRAY WITH FROM METHOD
// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// const randomArray = Array.from(
//   { length: 100 },
//   (_, i) => (i = Math.floor(Math.random() * 6) + 1)
// );
//console.log(randomArray);

labelBalance.addEventListener('click', function (e) {
  // const movementsUI = Array.from(
  //   document.querySelectorAll('.movements__value')
  // );

  // console.log(movementsUI.map((el) => Number(el.textContent.replace('€', ''))));

  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (el) => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
