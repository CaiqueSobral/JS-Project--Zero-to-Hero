'use strict';

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved funcionality and analytics. <button class="btn btn--close-cookie"> Got it! </button>';
header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // remove the element
  });

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // Does not work, it works only with styles we put ourselves

console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // Returns the absolute url
console.log(logo.className);

logo.alt = 'Beatiful minimalist logo'; // Setting atribute

//Non-standard
console.log(logo.designer); // Does not work
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'bankist');

// in order to take the relative attributes, use getAttribute
console.log(logo.src);
console.log(logo.getAttribute('src'));

//Another exemple
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attributes
console.log(logo.dataset.versionNumber);

//Classes - Work with many classes at same time
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');

// Don't use
//logo.className = 'Caique';
