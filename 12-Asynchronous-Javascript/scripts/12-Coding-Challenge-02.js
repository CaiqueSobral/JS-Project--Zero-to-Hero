'use strict';

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, +seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('../images/img-1.jpg')
  .then((img) => {
    currentImg = img;
    console.log('Image 1 loaded');

    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('../images/img-2.jpg');
  })
  .then((img) => {
    currentImg = img;
    console.log('Image 1 loaded');

    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch((err) => console.error(err));
