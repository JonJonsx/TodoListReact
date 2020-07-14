import React from 'react';
import Main from './pages/main'

import "./styles.css";

function App() {
  return (
    <div>
      <div className="container">
        <input id="addTodo" placeholder="Digite a tarefa..." className="addTask"></input>
        <Main />
      </div>
    </div>
  );
}

export default App;
