'use strict';

////////////////////////////////////////////////////////////
///////////////////  CODING CHALLENGE #2  //////////////////
////////////////////////////////////////////////////////////

/*
Tasks:

1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

Test data:
  § Data car 1: 'Ford' going at 120 km/h
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
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }
}

const ford = new Car('Ford', 100);

console.log(ford.speedUS);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();

ford.speedUS = 62.5; // 100 Km/h

console.log(ford);

//==========================================================
//==========================================================
