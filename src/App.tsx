import { getMaxListeners } from 'process';
import React, { useEffect } from 'react';
import './App.css';

import { AddTodo } from './components/addTodo'
import { TodoList } from './components/todoList';


function App() {
  return (
    <div className="App">
      <h4>TODO LIST</h4>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
