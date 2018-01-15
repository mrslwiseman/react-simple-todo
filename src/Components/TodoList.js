import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

  renderTodo = (key) => {
    const {onTodoClick, todos} = this.props;
    const todo = todos[key];
  
    return <Todo 
    key={key} 
    {...todo} 
    //send a function like this so that we can bind the id to it.
    onClick={() => onTodoClick(todo.id)} 
    />
  }

  render() {
    const { todos } = this.props;

    return (
      <div className="TodoList">

        {
          this.props.todos &&
          Object.keys(todos)
            .map((key) => this.renderTodo(key))
        }
      </div>
    );
  }
}

export default TodoList;
