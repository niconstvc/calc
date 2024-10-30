// src/App.js o Main.js
import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi calculadora</h1>
        {/* Menú existente */}
        <Calculator />
      </header>
    </div>
  );
}

export default App;
