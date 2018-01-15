import React from 'react';
import { addTodoAction } from '../Actions'
import { connect } from 'react-redux';

let Input = ({ dispatch }) => {
    let textInput;

    const onAddTodo = (e) => {
        e.preventDefault();
        const todoText = textInput.value;
        dispatch(addTodoAction(todoText));
        e.target.reset();
    }

    return (
        <form onSubmit={(e) => onAddTodo(e)}>
            <input ref={input => { textInput = input }} type="text" />
            <button>Add</button>
        </form>
    )

}

Input = connect()(Input);

export default Input;