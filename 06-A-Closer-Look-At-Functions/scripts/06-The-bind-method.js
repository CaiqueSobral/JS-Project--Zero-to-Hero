'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flighNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flighNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flighNum}`, name });
  },
};

lufthansa.book(239, 'Caique Sobral');
lufthansa.book(639, 'Meu Suxu');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Willians');

// Call method
book.call(eurowings, 23, 'Sarah Willians');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Coopeer');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// book.call(swiss, ...[flightData]); Better way
