"use strict";
const caique = {
  firstName: "Caique",
  year: 2001,
  calcAge: function () {
    console.log(this); // Points to the caller of the method
    console.log(2022 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996); // Undefined
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996); // arrow function use this from its parent
    };
    isMillenial();
  },

  //greet: () => console.log(`Hey ${this.firstName}`), // undefined (arrow function don't have its own "this")
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

caique.greet();
caique.calcAge();
