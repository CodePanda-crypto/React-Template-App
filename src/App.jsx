/* eslint-disable no-unused-vars */
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