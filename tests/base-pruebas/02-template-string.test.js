import { getSaludo } from "../../src/base/02-template-string";

describe('Pruebas en 02-template-string',()=>{
    test('getSaludo debe retornar "hola fernado"',()=>{
        const name = 'David';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
    });
});