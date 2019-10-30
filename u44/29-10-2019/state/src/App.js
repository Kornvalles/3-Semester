import React, { useState, useEffect } from 'react';
import "./App.css";

//useState - Change what is shown
//useEffect - Always runs after render()
function App(props) {
  const [count, setCount] = useState(Number(localStorage.getItem("count")) || props.initialValue);
  const [date, setDate] = useState(new Date().toLocaleTimeString);

  useEffect(() => {
    Number(localStorage.setItem("count", count));
  });

  useEffect(() => {
    const s = setInterval(() => {
      setDate(date.toLocaleTimeString());
    }, 1000);

    //Clears the setInterval to prevent state issues
    return () => clearInterval(s);
  })

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + props.increment)
      }}>Start Count Up</button>
      <button onClick={() => {
        setCount(count - props.increment)
      }}>Start Count Down</button>
      <p>{date}</p>
    </div>
  )
}

export default App;
