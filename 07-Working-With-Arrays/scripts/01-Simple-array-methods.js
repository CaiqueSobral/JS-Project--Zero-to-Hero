let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method -- Does not mutate the original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log()

// SPLICE method -- Mutate the original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT"
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Does the same thing

// JOIN
console.log(letters.join(' - '));
('');
