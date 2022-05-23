'use strict';

const flight = 'LH234';
const caique = {
  name: 'Caique Sobral',
  passport: 24739479248,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479248) {
    alert('Check in');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, caique);
console.log(flight);
console.log(caique);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(caique);
checkIn(flight, caique);
