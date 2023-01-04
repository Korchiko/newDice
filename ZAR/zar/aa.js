const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const name1 = document.querySelector("#name--0");
const name2 = document.querySelector("#name--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.innerHTML = 0;
diceEl.classList.add("hidden");

let rollDice = 0;
let currentSkor = 0;

btnRoll.addEventListener("click", function () {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  if (rollDice === 0) {
    if (diceNumber === 1) {
      rollDice = 1;
      currentSkor = 0;
      player0El.classList.remove("player--active");
      player1El.classList.add("player--active");
    } else {
      currentSkor += diceNumber;
    }
    current0El.textContent = currentSkor;
  } else if (rollDice === 1) {
    if (diceNumber === 1) {
      currentSkor = 0;
      rollDice = 0;
      player0El.classList.add("player--active");
      player1El.classList.remove("player--active");
    } else {
      diceNumber += currentSkor;
    }
    current1El.textContent = currentSkor;
  }
});
