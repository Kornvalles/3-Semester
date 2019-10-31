import React, { useState, useEffect } from 'react';
import "./App.css";

//useState - Change what is shown
//useEffect - Always runs after render()
function App(props) {
  const [count, setCount] = useState(Number(localStorage.getItem("count")) || props.initialValue);
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [joke, setJoke] = useState("");
  const [getJoke, setGetJoke] = useState(false);

  useEffect(() => {
    Number(localStorage.setItem("count", count));
  },[count]);

  useEffect(() => {
    const s = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    //Clears the setInterval to prevent state issues
    return () => clearInterval(s);
  })

useEffect(() => {
  fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => setJoke(data.value))
},[getJoke]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + props.increment)
      }}>Start Count Up</button>
      <button onClick={() => {
        setCount(count - props.increment)
      }}>Start Count Down</button>
      <p>Time is: {date}</p>
      <button onClick= {() => {
        setGetJoke(!getJoke);
      }}>Get Chuck Norris Joke!</button>
      <p>{joke}</p>
    </div>
  )
}

export default App;
