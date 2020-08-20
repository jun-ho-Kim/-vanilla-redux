import React, {useState} from 'react';
import { useDispatch } from '../context';
import { ADD } from '../actions';
//dispatch 추가

export default () => {
    const [newToDo, setNewToDo] = useState("");
    const dispatch = useDispatch();
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
        <form onSubmit={onSumbit}>
        <input
            value={newToDo}
            type="text"
            placeholder="Write to do"
            onChange={onChange}
        />
        </form>
    )

}