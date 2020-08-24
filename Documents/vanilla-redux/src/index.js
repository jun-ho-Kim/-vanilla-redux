import { createStore } from "redux";
 
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerHTML = 0;

const countModifier = (count = 0, action) => {
  console.log("count:", count, "action:", action);
  if(action.type === "ADD") {
    return count += 1;
  } else if (action.type === "MINUS") {
    return count -=1;
  } else {
    return count;
  }
}

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type:"ADD"});
};

const handleMinus = () => {
  countStore.dispatch({type:"MINUS"});
}

console.log("countStore.getState(): ",countStore.getState());

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);