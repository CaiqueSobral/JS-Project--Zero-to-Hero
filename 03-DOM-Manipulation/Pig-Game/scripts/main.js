"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");

const resetGame = function () {
  diceEl.classList.add("hidden");
  score0El.textContent = 0;
  score1El.textContent = 0;
};
resetGame();
