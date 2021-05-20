import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [isvisible, setVisible] = useState(false);
  const [obj, setObj] = useState({ apple: 5 });
  const [data, setData] = useState([1, 2, 3]);
  const change = () => {
    setObj({ ...obj, banana: 10 });
    setData((prevState) => {
      return [...prevState, 4];
    });
    setVisible((s) => !s);
  };
  return (
    <div className="App">
      <h1>{JSON.stringify(obj)}</h1>
      <h2>{JSON.stringify(data)}</h2>
      <h3>{isvisible ? "visible" : "hidden"}</h3>
      <button onClick={change}>Change</button>
    </div>
  );
}
