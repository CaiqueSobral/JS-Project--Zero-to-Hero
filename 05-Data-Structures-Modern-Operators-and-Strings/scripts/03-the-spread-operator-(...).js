"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta, with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//JOIN 2 ARRYAS (OR MORE)
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//ITERABLES: ARRAYS, STRINGS, MAPS, SETS. NOT OBJECTS
const str = "Caique";
const letters = [...str, " ", "S"];
console.log(letters);
console.log(...str);
//console.log(`${...str} Sobral.`); //STRING LITERAL DOES'T ACCEPT MULTIPLE VALUES SEPARATED BY COMMA

// REAL WORLD EXEMPLE
// const ingridients = [
//   prompt("Let's make pasta! Indrigient 1?"),
//   prompt("Let's make pasta! Indrigient 2?"),
//   prompt("Let's make pasta! Indrigient 3?"),
// ];
// console.log(ingridients);

const ingridients = ["mushrooms", "aspargus", "cheese"];
restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
restaurant.orderPasta(...ingridients);

//OBJECTS
const newRestaurant = { foundedIn: 1988, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorant Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);