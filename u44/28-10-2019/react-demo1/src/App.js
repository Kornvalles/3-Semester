import React from "react";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";

function App() {
  return (
    <div className="App">
      <h3>Hello World</h3>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppercase me")}</p>
    </div>
  );
}

export default App;
