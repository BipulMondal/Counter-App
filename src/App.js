import React, { useState } from 'react';
import "./App.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  }

  return (
    <div className='counter'>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className='btn'>
      <button id='btn' onClick={decrement}>Decrement</button>
      <button id='btn' onClick={increment}>Increment</button>
      <button id='btn' onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
