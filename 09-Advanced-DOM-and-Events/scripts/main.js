'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const imgTargets = document.querySelectorAll('img[data-src]');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//==========================================================
//==========================================================

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

////////////////////////////////////////////////////////////
///////////////////  SMOOTH SCROLLING  /////////////////////
////////////////////////////////////////////////////////////

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    if (id === '#') return;
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//==========================================================
//==========================================================

////////////////////////////////////////////////////////////
//////////////////  SCROLLING ANIMATION  ///////////////////
////////////////////////////////////////////////////////////

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

//==========================================================
//==========================================================

////////////////////////////////////////////////////////////
//////////////////  LAZY LOADING IMAGES  ///////////////////
////////////////////////////////////////////////////////////

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace the image
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach((img) => {
  imgObserver.observe(img);
});

//==========================================================
//==========================================================

////////////////////////////////////////////////////////////
///////////////////  STICKY NAVIGATION  ////////////////////
////////////////////////////////////////////////////////////

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//==========================================================
//==========================================================

////////////////////////////////////////////////////////////
///////////////////  TABBED COMPONENT  /////////////////////
////////////////////////////////////////////////////////////

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  // Guard Clause
  if (!clicked) return;

  //Remove active class
  tabs.forEach((tabs) => tabs.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//==========================================================
//==========================================================

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
//==========================================================
//==========================================================
