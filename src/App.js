import React, {useState} from "react";


//const fpeso=(p,sp)=>{
const primeiro=(p,sp)=>{
  return(
    <div>
      <label>

        <h1>Multiplicador de Números</h1>
        Digite o primeiro Número:
        <br></br>
        <input type="number" value={p} onChange={(e)=>{sp(e.target.value)}}/>
      </label>
      
    </div>
  )
}

//const faltura=(a,sa)=>{
const segundo=(a,sa)=>{
  return(
    <div>
      <label>
      <br></br>
        Digite o segundo Número:
        <br></br>
        <input type="number" value={a} onChange={(e)=>{sa(e.target.value)}}/>
      </label>
    </div>
  )
}

const fcalcular=(p,a,sr)=>{
  
    const calc=()=>{
      sr(p*a)
    }
  return(
    <div>
      <br></br>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

//<p id="result">Resultado: {r.toFixed(2)}</p> para duas casa decimais
const fresultado=(r)=>{
  return(
    <div>
      
      <p id="result">Resultado: {r}</p>
    </div>
  )
}

export default function App() {

  const [prim,setPrimeiro] =useState(0)
  const [secu,setSegundo] =useState(0) 
  const [resultado,setResultado] =useState(0)

  return (
    <>
    {primeiro(prim,setPrimeiro)}
    {segundo(secu,setSegundo)}
    {fcalcular(prim,secu,setResultado)}
    {fresultado(resultado)}
   
     
    </>  
  );
}


/** 

import React, { Component, } from 'react';
import './App.css';
import './soma.js';

 
class App extends Component {
 
  render(){
    return(
      <div>

        <head>
          <title>Multiplicação</title>
          <script src="soma.js"></script>
        </head>

        <section>
          <div class="centro">

            Primeiro Valor:
            <br></br>
            <input class="num1" type="text"></input>
            <br></br>
            Segundo Valor:
            <br></br>
            <input class="num2" type="number"></input>
            <br></br>
            <button onClick="clicar()">Resultado</button>
            <p class="resultado"></p>

          </div>
        </section>
       
      </div>
    );
  }
}
 
export default App;
 

*/
      



