import { usContext } from "../../src/base/06-deses-obj"

describe('06-deses-obj',() =>{
    test('usContext debe retornar un objecto',() =>{
        const persona={
            nombre:'Tony',
            edad:45,
            clave:'Ironman',
            
        }
        const usContextTest = ({ clave, nombre, edad, rango = 'Capitán' }) => {
        // console.log( nombre, edad, rango );    
            return {
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }
        }

        const testUsCont = usContextTest( persona );
        const testRealCont= usContext(persona);
        expect(testUsCont).toStrictEqual(testRealCont);
        

    })
})