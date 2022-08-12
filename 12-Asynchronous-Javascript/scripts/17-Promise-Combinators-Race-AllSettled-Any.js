'use strict';

const getJSON = function (url, errorMSG = 'Something went wrong! 🔴🔴') {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMSG} (${response.status})`);
    }
    return response.json();
  });
};

// PROMISE.RACE

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/brazil`),
    getJSON(`https://restcountries.com/v2/name/china`),
  ]);

  console.log(res[0]);
})();

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, +seconds * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(1)])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// PROMISE.ALLSETTLED -- Do not stop if a promise is rejected
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then((res) => console.log(res));

// Promise.any -- Ignore rejected promises and take the first resolved promise
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
