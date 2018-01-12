import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: {
      }
    }
  }

  addTodo = (e) => {
    e.preventDefault();
    const todoText = this.textInput.value;
    const todos = {...this.state.todos}
    const timestamp = Date.now();
    todos[`${timestamp}`] = {
      text: todoText,
      completed: false
    }
    this.setState({todos})
    e.target.reset();
  }

  toggleCompleted = (key) => {
    const updatedTodos = Object.assign({}, this.state.todos);
    updatedTodos[key].completed = !updatedTodos[key].completed;
    this.setState({todos: updatedTodos}) 
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.addTodo}>
            <input ref={input => this.textInput = input} type="text" />
            <button>Add</button>
          </form>

          <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
