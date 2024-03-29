'use strict';

////////////////////////////////////////////////////////////
//////////////////  MENU FADE ANIMATION  ///////////////////
////////////////////////////////////////////////////////////

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

// Opposite of Mouse Over
nav.addEventListener('mouseout', handleHover.bind(1));

//==========================================================
//==========================================================
