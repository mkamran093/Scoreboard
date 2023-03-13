let home = document.getElementById("home");
let guest = document.getElementById("guest");

let hScore = 0;
let gScore = 0;

home.textContent = hScore;
guest.textContent = gScore;

function hAdd1() {
  hScore += 1;
  home.textContent = hScore;
}

function hAdd2() {
  hScore += 2;
  home.textContent = hScore;
}

function hAdd3() {
  hScore += 3;
  home.textContent = hScore;
}

function gAdd1() {
  gScore += 1;
  guest.textContent = gScore;
}

function gAdd2() {
  gScore += 2;
  guest.textContent = gScore;
}

function gAdd3() {
  gScore += 3;
  guest.textContent = gScore;
}

function reset() {
  hScore = gScore = 0;
  guest.textContent = gScore;
  home.textContent = hScore;
}
