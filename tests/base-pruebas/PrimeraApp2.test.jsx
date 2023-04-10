import { render , screen} from "@testing-library/react";
import PrimeraApp from "../../src/PrimeraApp";


describe('Pruebas en <PrimeraApp/>',()=>{
    const title ='Hola que hay bajo el agua'
    const subTitle ='subtitulo';
    //update snapshop; con la tecla u
    test('debe de mostrar el titulo en un p',()=>{
        
        const {container} = render(<PrimeraApp titulo={title}/>)
        expect(container).toMatchSnapshot();
        
    });
    test('debe de mostrar el "Hola que hay bajo el agua"',()=>{
        render(<PrimeraApp titulo={title}/>)

        //screen.debug(): muestra todo el html del componente
        //heading: 
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain( title );
    });

    render(<PrimeraApp 
        titulo={title}
        subtitulo ={subTitle}
        />)
    //toBeTruthy: pruebas flexibles debe tener un titlo
    expect(screen.getAllByText(subTitle).length).toBe(2);
});