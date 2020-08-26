import React, {useState} from "react";
import {connect} from "react-redux";

const Home = ({toDos}) => {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    };
    function onSubmit(e) {
        e.preventDefault();
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

function mapStateToProp(state) {
    return {
        toDos: state
    }
};
export default connect(mapStateToProp)(Home);