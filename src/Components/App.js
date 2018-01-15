import React, { Component } from 'react';
import Input from '../Containers/Input';
import TodoList from './TodoList';
import Footer from './Footer';
import VisibleTodoList from '../Containers/VisibleTodoList';
import { connect } from 'react-redux';


import { updateVisibility } from '../Actions'


class App extends Component {



  render() {
    const { dispatch } = this.props
    return (
      <div className="App">
        <Input />
        <VisibleTodoList />

        <Footer />
      </div>
    );
  }
}
App = connect()(App)

export default App;
