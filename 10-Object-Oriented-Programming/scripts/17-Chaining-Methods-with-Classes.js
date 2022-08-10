('use strict');

////////////////////////////////////////////////////////////
///////////////////  CHAINING METHODS  /////////////////////
////////////////////////////////////////////////////////////

class Account {
  // 1) Public fields
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Private properties
    this.#pin = pin;
    this.#movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  // PUBLIC INTERFACES
  deposit(val) {
    this.#movements.push(val);

    return this;
  }

  withdraw(val) {
    this.deposit(-val);

    return this;
  }

  // Private method
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Caique', 'EUR', 1111);

//acc1.#movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

//console.log(acc1.#movements); ERROR
//console.log(acc1.#pin); ERROR

acc1.deposit(300).deposit(400).withdraw(35).requestLoan(1000).deposit(150);

console.log(acc1);

//==========================================================
//==========================================================
