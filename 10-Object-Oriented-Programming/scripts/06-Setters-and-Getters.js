'use strict';

////////////////////////////////////////////////////////////
/////////////////  GETTERS AND SETTERS  ////////////////////
////////////////////////////////////////////////////////////

const account = {
  owner: 'Caique',
  movements: [200, 520, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl2 {
  constructor(fullName, birthear) {
    this.fullName = fullName;
    this.birthear = birthear;
  }

  // Methods will be added to .prototype
  calcAge() {
    console.log(2022 - this.birthear);
  }

  greet() {
    console.log('Hey');
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const caiquecl2 = new PersonCl2('Caique Sobral', 2001);
console.log(caiquecl2.fullName);
//==========================================================
//==========================================================
