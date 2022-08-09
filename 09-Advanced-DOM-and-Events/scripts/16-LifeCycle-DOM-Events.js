'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});

document.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// document.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);

//   e.returnValue = '';
// });
