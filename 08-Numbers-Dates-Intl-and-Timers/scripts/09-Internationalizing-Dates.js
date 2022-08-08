('use strict');

const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const locale = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
