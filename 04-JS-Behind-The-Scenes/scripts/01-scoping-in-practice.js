"use strict";

function calcAge(birthyear) {
  const age = 2022 - birthyear;
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const firstName = "José";
      const str = `Oh, you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      const output = "NEW OUTPUT";
    }
    //console.log(str); //SCOPE ERROR
    console.log(millenial); //VAR = FUNCTION SCOPE, IGNORE BLOCKS
    //add(2, 3); //IF STRICT MODE = FUNCTION IS BLOCK SCOPED
  }
  printAge();
  return age;
}

// console.log(age); //Reference error, age is not in the scope.
const firstName = "Caique";
calcAge(1991);
