import React from "react";
import { useDispatch } from "../context";
import { DEL, COMPLETE, UNCOMPLETE } from "../actions";

export default ({id, text, isCompleted}) => {
    const dispatch = useDispatch();
    return (
        <>
        <h4>
            <li key={id}>
            <span>{text}</span>
            <button onClick={() => dispatch({type: DEL, payload: id})} >❌</button>
            <button onClick={() => 
                dispatch({type: isCompleted ? UNCOMPLETE :COMPLETE, payload: id})}>
            {isCompleted ? "🙅🏼‍♂️" : "✅"}
            </button>
            </li>
        </h4>
        </>
    )
}