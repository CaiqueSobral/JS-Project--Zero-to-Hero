'use strict';

////////////////////////////////////////////////////////////
///////////////////  CODING CHALLENGE #4  //////////////////
////////////////////////////////////////////////////////////

/*
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class.

2. Make the 'charge' property private

3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

Test data:
  § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);

    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);

    return this;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;

    return this;
  }
}

const tesla = new EV('Tesla', 120, 23);
const ford = new Car('Ford', 100);
console.log(tesla);

tesla.accelerate().brake().brake().accelerate().chargeBattery(70).accelerate();
ford.accelerate().brake().accelerate().accelerate();

console.log(tesla.speedUS);
//==========================================================
//==========================================================
