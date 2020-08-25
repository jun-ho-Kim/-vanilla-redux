import { createStore } from "redux";
 
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const reducer = (state = [], action) => {
  console.log("state:", state, "action:", action);
  switch(action.type) {
    case ADD_TODO:
      return [...state, {text: action.text}];
    case DEL_TODO:
      return [];
    default:
      return [];
  }
}

const todoStore = createStore(reducer);

todoStore.subscribe(() => console.log("todoStore.getState(): ",todoStore.getState()));
const onSumbit = (e) => {
  e.preventDefault();
  const todo = input.value;
  // createToDo(todo);
  input.value = "";
  todoStore.dispatch({type:ADD_TODO, text: todo});
}

form.addEventListener("submit", onSumbit);

console.log("todoStore.getState(): ",todoStore.getState());