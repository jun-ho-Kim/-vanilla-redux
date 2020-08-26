import React, {useState} from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store"

const Home = ({toDos, addToDo}) => {
    // console.log("props:", props);
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    };
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    };
    return (
        <>
        <form onSubmit={onSubmit}>
            <input 
                value={text} 
                onChange={onChange} 
                placeholder="Write the todo"
            />
            <button>ADD</button>
        </form>
        <ul>{JSON.stringify(toDos)}</ul>
        </>
    )
};

function mapStateToProps(state) {
    return {
        toDos: state
    }
};

function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);