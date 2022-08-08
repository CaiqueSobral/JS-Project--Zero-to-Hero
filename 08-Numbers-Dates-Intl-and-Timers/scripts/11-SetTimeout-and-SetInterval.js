// SET TIMEOUT
ingredients = ['olives', 'cheese'];

const pizzaTimer = setTimeout(
  function (ing1, ing2) {
    console.log(`Here ir your pizza 🍕 with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);

console.log('Waiting...');

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}

// SET INTERVAL
setInterval(() => {
  console.log(new Date());
}, 1000);
