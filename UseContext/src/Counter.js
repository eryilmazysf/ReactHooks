import "./styles.css";
import React,{useContext} from "react";
import {CounterContext} from "./App"
//Add Consumer

export default function Counter() {

  const {counter,increase,decrease}=useContext(CounterContext)

  return (
    <div className="App">
      <p>Counter:{counter}</p>
     <button onClick={increase}>Increase</button>
     <button onClick={decrease}>Decrease</button>
    </div>
  );
}
