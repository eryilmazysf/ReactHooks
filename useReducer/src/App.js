import "./styles.css";
import React, { useReducer } from "react";

const initialState = { counter: 0 };

export const CounterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export default function App() {
  const [state,dispatch]=useReducer(CounterReducer,initialState)
  return(
  <div >
      <h1>{state.counter}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
  </div>
)}
