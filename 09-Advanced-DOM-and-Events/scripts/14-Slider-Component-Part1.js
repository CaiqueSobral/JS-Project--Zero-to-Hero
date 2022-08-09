'use strict';

////////////////////////////////////////////////////////////
///////////////////  SLIDER COMPONENT  /////////////////////
////////////////////////////////////////////////////////////

let currentSlide = 0;
const maxSlide = slides.length - 1;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === maxSlide) currentSlide = 0;
  else currentSlide++;

  goToSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) currentSlide = maxSlide;
  else currentSlide--;

  goToSlide(currentSlide);
};

// Making the slides side to side
goToSlide(0);

// Move to next slide
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);

//==========================================================
//==========================================================
