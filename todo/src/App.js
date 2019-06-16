import React from 'react';
import TodoList from './components/TodoListCopy'
import TodoForm from './components/TodoFormCopy'

import './App.scss';

function App() {
  return (
    <div className="App">
      <TodoList/>
      <TodoForm/>
    </div>
  );
}

export default App;
