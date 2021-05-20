import "./styles.css";
import {useState,useMemo} from "react"


export default function App() {

  const [count,setCount]=useState(0);
  const [text,setText]=useState("")

  const duplicatedCount=useMemo(()=>{
    [...new Array(1000000)].forEach(item=>{})
    return count*2
  },[count])


  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>setCount(p=>p+1)}>Inrement</button>
      <h2>{duplicatedCount}</h2>
      <input type="text" onChange={e=>setText(e.target.value)}/>
    </div>
  );
}
