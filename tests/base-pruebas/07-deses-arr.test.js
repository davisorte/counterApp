import { retornaArreglo } from "../../src/base/07-deses-arr";

describe('Pruebas en 07-deses-arr',()=>{

    test('debe de retornar un string y un numero',()=>{
        const [ letters, numbers ]  = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        //Evaluar con el tipo de dato
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        //any.string: cualquier tipo de string acepta
        expect(letters).toEqual(expect.any(String))
    });
});