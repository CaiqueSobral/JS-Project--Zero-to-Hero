'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} M</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.error(`${err} 🔴🔴🔴🔴`);
      renderError(`Something went wrong!!
      ${err.message} 🔴🔴🔴🔴`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('brazil');
});
