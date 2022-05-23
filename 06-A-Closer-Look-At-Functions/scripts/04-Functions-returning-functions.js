'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Caique');
greeterHey('Suxu');

greet('Hello')('Caique');

// Challenge

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr('Hi')('Caique');
