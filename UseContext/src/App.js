import "./styles.css";
import React,{useState} from "react";
import Counter from "./Counter";

export const CounterContext = React.createContext();

//Add Provider

export default function App() {
  const [counter,setCounter]=useState(0)

  const decrease=()=>{
    setCounter(counter-1)
  }
  const increase=()=>{
    setCounter(counter+1)
  }



  return (
    <div className="App">
      <CounterContext.Provider value={{counter,increase,decrease}}>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}
