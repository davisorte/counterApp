import { getHeroeByIdAsync } from "../../src/base/09-promesas";

describe("Pruebas en 09-promesas", (done) => {
    
  test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
        expect(hero).toEqual({
            id: 1,
            name: "Batman",
            owner: "DC",
        });
     /* expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });*/
      //done: espera la respuesta
     done();//hasta que el codigo termine
    });
  });

  test("getHeroeByIdAsync debe de obtener un error si el heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
    .then(hero =>{
        expect(hero).toBeFalsy();
        done();
    })
    .catch((error) => {
     expect(error).toBe(`No se pudo encontrar el heroe con el id ${id}`)
     done();//hasta que el codigo termine
    });
  });
});
