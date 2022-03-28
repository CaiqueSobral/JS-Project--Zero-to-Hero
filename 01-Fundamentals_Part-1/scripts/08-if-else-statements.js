const age = 15,
  isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah can't start driving yet 😢.
  Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;

if (birthYear <= 200) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
