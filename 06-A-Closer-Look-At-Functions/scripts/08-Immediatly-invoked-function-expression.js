'use strict';

const runOnce = function () {
  console.log(`This will run again.`);
};

runOnce();

//  Immediatly invoked function expression
(function () {
  console.log(`This will never run again.`);
})();

(() => console.log(`This also will never run again`))();
