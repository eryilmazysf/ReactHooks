import "./styles.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Card from"./Card";

export default function App() {
  const inputRef = useRef();
  const [value, setValue] = useState([
    { id: 0, name: "yusuf" },
    { id: 1, name: "yasin" },
    { id: 2, name: "ayse" }
  ]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.publicapis.org/entries")
  //     .then((x) => console.log(x.request.response))
  // }, []);

  function click() {
    //console.log(inputRef.current?.value);
    setValue([...value, { id: value.length, name: inputRef.current?.value }]);
  }
  console.log(value);
  return (
    <div className="App">
      <h1>React JS</h1>
      <input type="text" ref={inputRef} />
      <button onClick={click}>Click</button>
      {value.map((x,i)=> <Card key={i} name={x.name}/>)}
    </div>
  );
}
