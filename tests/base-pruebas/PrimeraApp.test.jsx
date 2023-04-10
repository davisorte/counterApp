import { getByTestId, render } from "@testing-library/react";
import PrimeraApp from "../../src/PrimeraApp";


describe('Pruebas en <PrimeraApp/>',()=>{
    /*test('debe de hacer match con el snapshot',()=>{
        const {container} = render(<PrimeraApp titulo='Hola que hay bajo el agua'/>)
        //hacer evaluaciones de los cambios
        //toMatchSnapshot: captura 
        expect(container).toMatchSnapshot();
    })*/
    test('debe de mostrar el titulo en un p',()=>{
        const title ='Hola que hay bajo el agua'
        const {container , getByText,getByTestId} = render(<PrimeraApp titulo={title}/>)
        //toBeTruthy: pruebas flexibles
        expect(getByText(title)).toBeTruthy();
       
        //innerHtml: Muestra el contenido del dom
        //console.log(p.innerHTML);
        //toContain: evalua el contenido sin importart los espacios
        //const p = container.querySelector('p');
        //expect(p.innerHTML).toContain(title);
        //getByTestId: evalua el id del test
        expect(getByTestId('test-title').innerHTML).toContain(title);
        
    });
    test('debe de mostrar el subtitulo enviado por props',()=>{
        const title ='Hola que hay bajo el agua';
        const subTitle ='subtitulo';
        //getAllByText: rastrea por un arreglo varios elementos
        const { getAllByText} = render(<PrimeraApp 
            titulo={title}
            subtitulo ={subTitle}
            />)
        //toBeTruthy: pruebas flexibles debe tener un titlo
        expect(getAllByText(subTitle).length).toBe(2);
    });
});