import React, { Component } from 'react';

const Todo = (props) => {

    const {text, completed} = props.todo
    return (
      <div className="Todo">
        <li
        style={completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
        {text}
        <button onClick={e => props.toggleCompleted()}>Done</button>
        </li>
        
      </div>
    );
  
}

export default Todo;
