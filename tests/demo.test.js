describe("Pruebas en <DemoComponent></DemoComponent>",()=>{
    test('Esta es una prueba loca',()=>{
        //Pruebas
        //Inicializacion
        const  message1='Hola mundo'
        //Estimolo
        //trim: Eliminar parentesis
        const message2=message1.trim();
        //Observar el comportamiento esperado
        expect(message1).toBe(message2);//toBe: que sea igual 
    });

})
