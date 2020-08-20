import React from 'react';
import { v4 as uuid } from "uuid";
import { ADD, DEL, UNCOMPLETE, COMPLETE } from './actions';

export const initialState = {
    toDos: [],
    completed: []
  };
  
export const reducer = (state, action) => {
    switch(action.type) {
      case ADD:
        return {
          ...state,
          toDos: [...state.toDos, {text: action.payload, id: uuid()}]
        };
      case DEL:
        return {
          ...state,
          toDos: state.toDos.filter(todo => todo.id !== action.payload),
          completed: state.completed.filter(todo => todo.id !== action.payload)
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
  