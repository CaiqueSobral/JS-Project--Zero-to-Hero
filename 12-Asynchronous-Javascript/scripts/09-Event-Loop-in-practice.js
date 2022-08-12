'use strict';

console.log('test Start');

setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved priomise 1').then((res) => console.log(res));
Promise.resolve('Resolved 2').then((res) => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(res);
});
console.log('test end');
