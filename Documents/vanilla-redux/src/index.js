import { createStore } from "redux";
 
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DEL_TODO,
    id
  };
};

const reducer = (state = [], action) => {
  console.log("state:", state, "action:", action);
  switch(action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()}];
    case DEL_TODO:
      return state.filter(toDo => toDo.id !== parseInt(action.id));
    default:
      return state;
  }
};


const todoStore = createStore(reducer);

todoStore.subscribe(() => console.log(todoStore.getState()));

const dispatchDeleteToDo = e => {
  e.preventDefault();
  const id = e.target.parentNode.id;
  todoStore.dispatch(deleteToDo(id));
}
const paintToDos = () => {
  const toDos = todoStore.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const delBtn = document.createElement("btn");
    li.id = toDo.id;
    li.innerText = toDo.text;
    delBtn.innerHTML = "❌";
    li.appendChild(delBtn);
    ul.appendChild(li);
    delBtn.addEventListener("click", dispatchDeleteToDo);
  })
}


todoStore.subscribe(paintToDos);

const onSumbit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  todoStore.dispatch(addToDo(todo));
}

form.addEventListener("submit", onSumbit);