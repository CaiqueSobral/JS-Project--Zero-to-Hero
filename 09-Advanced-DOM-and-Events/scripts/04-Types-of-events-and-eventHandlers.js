'use strict';

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('AddEventListener: Great! You are reading the heading.');

  h1.removeEventListener('mouseenter', alertH1);
  // setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
};
h1.addEventListener('mouseenter', alertH1);

// Old version
// h1.onmouseenter = function (e) {
//   alert('onMouseEnter: Great! You are reading the heading.');
// };
