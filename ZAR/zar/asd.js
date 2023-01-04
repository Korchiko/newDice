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

//BAŞLANGIÇ KOŞULLARI

score0El.textContent = 0;
score1El.textContent = 0;

// diceEl.classList.add("hidden");
// name1.textContent = prompt("Birinci oyunucunun adını giriniz"); // PROMPT İLE GELEN DEĞER HER ZMAAN STRİNG DİR .
// name2.innerHTML = prompt("İkinci oyunucunun adını giriniz");


let player0Current = 0;
let rollDice = 0;  // hangi kullanıcıda sıra olduğunu belirleyen  değişken
let holder = [0, 0];


btnRoll.addEventListener("click", function () {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  if (rollDice === 0) {
    if (diceNumber === 1) {
      player0Current = 0;
      rollDice = 1;
      player0El.classList.remove("player--active");
      player1El.classList.add("player--active");
    } else {
      player0Current += diceNumber;
    }
    diceEl.src=`dice-${diceNumber}.png`
    current0El.textContent = player0Current;

 } else if (rollDice === 1) {
    if (diceNumber === 1) {
      player0Current = 0;
      rollDice = 0;
      player1El.classList.remove("player--active");
      player0El.classList.add("player--active");
    } else {
      player0Current += diceNumber;
    }
    diceEl.src=`dice-${diceNumber}.png`

    current1El.textContent = player0Current;
  }
});

btnNew.addEventListener("click", function () {
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0Current = 0;
  holder[0] = 0;
  holder[1] = 0;
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  btnHold.disabled = false;
  btnRoll.disabled = false;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
});

btnHold.addEventListener("click", function () {
  if (rollDice === 0) {
    holder[0] += player0Current;
    score0El.textContent = holder[0];
    player0Current = 0;
    rollDice = 1;
    player0El.classList.remove("player--active");
    player1El.classList.add("player--active");
    current0El.textContent = player0Current
    if (holder[0] >= 5) {
      player0El.classList.add("player--winner");
      name1.innerText="Emin"


      btnHold.disabled = true;
      btnRoll.disabled = true;
    }
  } else if (rollDice === 1) {
    holder[1] += player0Current;
    score1El.textContent = holder[1];

    player0Current = 0;
    rollDice = 0;
    player1El.classList.remove("player--active");
    player0El.classList.add("player--active");
    current1El.textContent = player0Current;
    if (holder[1] >= 5) {
      player1El.classList.add("player--winner");
      btnHold.disabled = true;
      btnRoll.disabled = true;
      name2.innerText="İsmail"

    }
  }
});
