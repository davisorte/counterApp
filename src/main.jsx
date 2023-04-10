import React  from 'react'
import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
//const saludo = <h1>Hola que tal</h1>;
//Sleccionar el div donde queremos insertar el saludo
const divRoot=document.querySelector('#root');
//componente padre
//las props hijas como padres deben tener el mismo valor ya que no se usaran
//ReactDOM.render(<CounterApp value={10} />,divRoot);//peimero se manda el compoenete que se creo y despues la direccion en donde se va a PONER
ReactDOM.render(<PrimeraApp titulo="Hola soy vegueta"/>,divRoot)





