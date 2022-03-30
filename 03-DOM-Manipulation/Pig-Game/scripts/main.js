"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let currentScore = 0;

const resetGame = function () {
  diceEl.classList.add("hidden");
  score0El.textContent = 0;
  score1El.textContent = 0;
};
resetGame();

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener("click", function () {
  //1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. Display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `../images/dice-${dice}.png`;
  //3 Check if rolled 1: if true change player
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
    //ADD dice to the current score
  } else {
    //Switch to the next player
  }
});
