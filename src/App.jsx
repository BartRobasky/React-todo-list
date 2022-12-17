import React, { Component } from 'react';
import './App.css'

import TodoList from './components/TodoList';


class App extends Component {
  render() {
    return (
      <section>
        <div className='todo-wrapper'>
          <h1>Todo App</h1>
          <TodoList />
        </div>
      </section>
    );
  }
}

export default App;
