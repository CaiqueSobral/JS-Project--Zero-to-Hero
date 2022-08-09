'use strict';

////////////////////////////////////////////////////////////
///////////////////  SLIDER COMPONENT  /////////////////////
////////////////////////////////////////////////////////////

let currentSlide = 0;
const maxSlide = slides.length - 1;

const slider = function () {
  // Creating the dots after the images
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Activating the right dot
  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((dot) => {
      dot.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // Making the slides side to side
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide) currentSlide = 0;
    else currentSlide++;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) currentSlide = maxSlide;
    else currentSlide--;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    // Creating the dots after the images
    createDots();

    // Making the slides side to side
    goToSlide(0);
    activateDot(0);
  };
  init();

  // Move to next slide
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
    }
  });
};

slider();
