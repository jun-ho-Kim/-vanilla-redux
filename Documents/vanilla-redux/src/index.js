import { createStore } from "redux";
 
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  return count;
}

const counterStore = createStore(countModifier);

console.log("counterStore :", counterStore.getState());