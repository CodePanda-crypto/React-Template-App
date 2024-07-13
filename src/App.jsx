/* eslint-disable no-unused-vars */
<<<<<<< HEAD
 import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}
  export default App;
=======
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <svg>
        <circle cx={25} cy={75} r={20} stroke="green" strokeWidth={2} />
      </svg>
    </div>
  );
}
export default App;
>>>>>>> 5d9f933a6e377b708416d266cf53e15c8860f937
