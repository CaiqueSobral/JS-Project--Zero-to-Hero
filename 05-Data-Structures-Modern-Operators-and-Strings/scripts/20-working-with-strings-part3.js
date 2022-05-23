'use strict';

console.log('a+very+nice+string'.split('+'));
console.log('Caique Sobral'.split(' '));

const [firstName, lastName] = 'Caique Sobral'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('caique lopes sobral');
capitalizeName('meu suxu é um suxu');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Caique'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const strNumber = String(number);
  const last = strNumber.slice(-4);
  return last.padStart(strNumber.length, '*');
};

console.log(maskCreditCard(4334099812246657));
console.log(maskCreditCard('7664223766489903'));

// repeat
const message2 = 'Bad waether... All departures Delayed... \n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(10);
