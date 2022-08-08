('use strict');

const num = 3882346.37;
const options2 = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
};
console.log('US: ', new Intl.NumberFormat('en-US', options2).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num));
