import PropTypes from 'prop-types'

//En la version 17 ya no es necesario importar react
//Utilizando desestructuracion en las props
const PrimeraApp=({name,titulo,subtitulo})=>{
    /**<> : no muestra el div en el navegador
     * {}: ver el contenido no imprime valores boleanos
     * se pueden muestrar areglos
     * {JSON.stringify(saludo)}
     * No se pueden imprimir objectos sin antes comvertirlos a json
     */
    /*const saludo={
        nombre:'DAvid',
        edad:19
    }*/
    //props : manda informacion entre los componentes
    return (
       
        <>
            {/*<h1>{JSON.stringify(saludo,null,3)}</h1>*/}
            <p>{name}</p>
            <h1 data-testid="test-title">{titulo}</h1>
            <p>{subtitulo}</p>
            <p>{subtitulo}</p>
        </>

        
    )
    
    
    
    
}
PrimeraApp.propTypes ={
    //va a recibir un valor de tipó string
   titulo:PropTypes.string.isRequired,
   subtitulo:PropTypes.string.isRequired
}
//valor por defecto desde props
PrimeraApp.defaultProps={
    name:'David Orea Alvarez',
   // titulo:'No hay titulo',
    subtitulo:'No hay subtitulo'
}
export default PrimeraApp;