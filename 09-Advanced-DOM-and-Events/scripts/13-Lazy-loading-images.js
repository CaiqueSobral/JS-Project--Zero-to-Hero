'use strict';

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
