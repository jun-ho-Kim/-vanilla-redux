import { createStore } from "redux";
 
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DEL_TODO = "DEL_TODO";

// const reducer = (count = 0, action) => {
//   console.log("count:", count, "action:", action);
//   switch(action.type) {
//     case ADD_TODO:
//       return [{text: action.text}];
//     case DEL_TODO:
//       return [];
//     default:
//       return [];
//   }
// }

// const todoStore = createStore(reducer);

const createToDo = toDo => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
}

const onSumbit = (e) => {
  e.preventDefault();
  const todo = input.value;
  createToDo(todo);
  input.value = "";
  // todoStore.dispatch({type:ADD_TODO, text: todo});
}

// console.log("todoStore.getState(): ",todoStore.getState());

form.addEventListener("submit", onSumbit);