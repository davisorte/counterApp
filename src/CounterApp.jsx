import PropTypes from 'prop-types'
import { useState } from 'react';
const CounterApp=({value})=>{
//hooks: son funciones que regresan valores y funciones
//desestructuracion para usar el UseStated
    const [counter,setCounter]=useState(value)//regresa un arreglo con dos valores

    console.log(value);
    const handleApp=()=>{
        //console.log(e);
        //No permite cambiar el valor con este incremento
        //counter++;
        //No se puede cambiar un valor de una constante
        //setCounter(counter+1);//incrementar el valor con hoots
        setCounter((c)=>c+1)//funcion que incrementa en 1
    }

    const valueDefault=()=>{
        setCounter(value)
    }
    const decrementValue=()=>{
        setCounter(counter-1)
    }
    return(
        <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        {/**Ejecutar una funcion de evento asi */}
        <button onClick={handleApp}>+1</button>
        <button onClick={valueDefault}>Reset</button>
        <button onClick={decrementValue}>-1</button>
        </>
        
    )
}
//Usando prop types que se mandan desde el componente padre
CounterApp.propTypes={
    //el valor debe ser numerico
    value:PropTypes.number
}

export default CounterApp;