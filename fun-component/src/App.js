import React, { useState, useEffect } from 'react';
import useCustomCounter from './Custom'

function App() {
  const [name, setName] = useState('Amit Taylor');
  const [count, setCount] = useState(1);

  // here useCustomCounter is a Custom Hook
  const {counts, handleIncrements} = useCustomCounter();

  const handleClick = () => {
    console.log("Button Clicked!");
    (name!=="Ram") ? setName("Ram") : setName("Amit Taylor");
  }

  const handleIncrement = () => {
    setCount(count+1);
  }

  useEffect( () => {
   console.log("Use Effect Called!");
   if(count>10){
     console.log("Hi");
   }
  }, [count]);

  return (
    <div className="App">
      <h1>How to use Hooks and How to create custom Hooks in function component</h1>
      <p>My Name is {name}</p>
      <button onClick={handleClick}> Click Me</button>
      <p>Count is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <h2>Custom Hook Example</h2>
      <p>Count up: {counts}</p>
      <button onClick={handleIncrements}>Increment</button>
    </div>
  );
}

export default App;
