const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

function updateText() {
  number.innerText = count;
}

function handleAdd() {
  count += 1;
  updateText();
}

function handleMinus() {
  count -= 1;
  updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);