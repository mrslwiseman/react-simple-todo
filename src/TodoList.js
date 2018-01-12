import React, { Component } from 'react';
import Todo from './Todo'
class TodoList extends Component {

  renderTodo = (key) => {
    const todo = this.props.todos[key]
    return <Todo key={key} todo={todo} toggleCompleted={() => this.props.toggleCompleted(key)}/>
  }

  render() {
    const { todos } = this.props;

    return (
      <div className="TodoList">

        {
          Object.keys(todos)
            .map((key) => this.renderTodo(key))
        }
      </div>
    );
  }
}

export default TodoList;
