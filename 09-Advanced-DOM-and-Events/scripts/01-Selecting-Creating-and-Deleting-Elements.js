'use strict';

// SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// CREATING AND INSERTING ELEMENTS
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved funcionality and analytics.';
message.innerHTML =
  'We use cookies for improved funcionality and analytics. <button class="btn btn--close-cookie"> Got it! </button>';

// header.prepend(message); //Insert the element as the first child
// header.append(message.cloneNode(true)); // Clone the element

header.append(message); //Insert the element as the last child

header.before(message); // INSERT ELEMENT BEFORE THE HEADER
header.after(message); // INSERT ELEMENT AFTER THE HEADER

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // remove the element
  });
