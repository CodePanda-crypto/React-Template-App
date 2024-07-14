/* eslint-disable no-unused-vars */

import React from 'react';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="container">
      <h1>Hello Vite + React!</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <img src={viteLogo} className="logo" alt="Vite logo" />

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
export default App;
