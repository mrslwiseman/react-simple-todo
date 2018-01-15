import React from 'react';
import PropTypes from 'prop-types'
const Todo = (props) => {
    const {onClick} = props
    const {text, completed} = props
    return (
      <div className="Todo">
        <li
        // onclick executes, id is autobound. see TodoList component
        onClick={onClick}
        style={completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
        {text}
        
        </li>
        
      </div>
    );
  
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
