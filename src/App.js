import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <header><h2>Contador Simple con React</h2></header>
      <h1 className={count>0 ? "positive": count<0 ? "negative":null}>{count}</h1>
      <div className="button__wrapper">
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
    </div>
  );
}

export default App;
