import React, {useReducer, useState} from 'react';
import UserContextProvider, { useSetLang } from './context';
import Screen from './Screen';
import translation from "./translation";
import { v4 as uuid } from "uuid";

const initialState = {
  toDos: [],
  completed: []
};

const ADD = "add";
const DEL = "del";
const COMPLETE = "complete";
const UNCOMPLETE = "uncomplete";

const reducer = (state, action) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, {text: action.payload, id: uuid()}]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter(todo => todo.id !== action.payload)
      };
    case COMPLETE:
      const target = state.toDos.find(todo => todo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter(todo => todo.id !== action.payload),
        completed: [...state.completed, {...target}]
      };
      case UNCOMPLETE:
        const aTarget = state.completed.find(todo => todo.id === action.payload);
        return {
          ...state,
          toDos: [...state.toDos, {...aTarget}],
          completed: state.completed.filter(todo => todo.id !== action.payload)
        }
    default:
      return;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSumbit = e => {
    e.preventDefault();
    dispatch({type: ADD, payload: newToDo});
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target : {value}
    } = e;
    setNewToDo(value);
  };
  return (
    <>
    <UserContextProvider defaultLang="en" translation={translation}>
      <Screen />
    </UserContextProvider>
    <h1>Add to do </h1>
    <form onSubmit={onSumbit}>
      <input
        value={newToDo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </form>
    <ul>
      {state.toDos.length !== 0 &&
      <>
        <h2>Todo </h2>
        <h4>{state.toDos.map(todo => (
          <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => dispatch({type: DEL, payload: todo.id})} >❌</button>
          <button onClick={()=> dispatch({type: COMPLETE, payload: todo.id})}>✅</button>
          </li>
        ))}
          
        </h4>
      </>}
    </ul>
    <ul>
    {state.completed.length !==0  &&
    <>
    <h2>Completed</h2>
    <h4>{state.completed.map(todo =>
    <li key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={() => dispatch({type: DEL, payload: todo.id})} >❌</button>
      <button onClick={() => dispatch({type: UNCOMPLETE, payload: todo.id})}>🙅🏼‍♂️</button>
    </li>
    )}
    </h4>
    </>}
    </ul>
    </>
  )
}

export default App;
