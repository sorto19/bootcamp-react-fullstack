
import ReactDOM from 'react-dom';
import { useState } from "react";
const rootElement = document.getElementById("root");

const Counter =({number})=>{
  return <h1>{   number}</h1>
}
const App =() =>{

  const [contador, setContador] =useState(7)


  console.log("render");
  //funcion handle es una funcion helper
  const handleClick= ()=>{
    setContador(contador+1)  
  }
  const handleReset= ()=>{
    setContador(0)
  }
  const isEven = contador% 2 ===0
  const Mensaje= isEven ? "es par ": "impar"
 
  return (
      <div>
        <p>el valor de el contador es:</p>
        < Counter number={contador}/>
        <h4>{Mensaje}</h4>
        <h2>magia de react</h2>
        <button onClick={handleClick}
>
          Incrementar
        </button>
        <button onClick={handleReset}
>
          reset
        </button>
      </div>
  );
  
}

ReactDOM.render (
  <App />,
  rootElement
);


 


