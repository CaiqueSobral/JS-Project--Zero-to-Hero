'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You lost'));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// PROMISIFYING setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, +seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I Waited for 1 sec');
    return wait(1);
  })
  .then(() => {
    console.log('I Waited for 2 sec');
    return wait(1);
  })
  .then(() => {
    console.log('I Waited for 3 sec');
    return wait(1);
  })
  .then(() => console.log('I waited for 4 seconds'));

Promise.resolve('ABCDEFG').then((x) => console.log(x));
Promise.reject(new Error('Problem')).catch((x) => console.error(x));
