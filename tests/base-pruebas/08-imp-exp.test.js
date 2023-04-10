import { getHeroeById, getHeroesByOwner } from "../../src/base/08-imp-exp";
import heroes from "../../src/base/data/heroes";

describe('Pruebas en 08-imp-exp',()=>{
    test('getHeroeById debe de retornar un heroe por id',()=>{

        const id = 1;
        const hero = getHeroeById(id);
        //Para comparar objectos se utiliza el toEqual
        expect(hero).toEqual({id:1,name:'Batman',owner:'DC'})
    });

    test('getHeroeById debe de retornar un undefine si no existe el id',()=>{

        const id = 100;
        const hero = getHeroeById(id);
        //Para comparar objectos se utiliza el toEqual
        //toBeFalsy: para valores negativos o undefined o false
        expect(hero).toBeFalsy();
        //expect(hero).toEqual({id:1,name:'Batman',owner:'DC'})
    });

    test('getHeroesByOwner debe de retornar 3 heroes de Dc',()=>{

        const ownwerHero = 'DC';
        const getOwnerHero = getHeroesByOwner(ownwerHero);
        //Para comparar objectos se utiliza el toEqual
        //toBeFalsy: para valores negativos o undefined o false
        
        expect(getOwnerHero).toStrictEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        expect(getOwnerHero.length).toBe(3);

        expect(getOwnerHero).toEqual(heroes.filter( (heroe) => heroe.owner === ownwerHero ))
    });

    test('getHeroesByOwner debe de retornar 2 heroes de Marvel',()=>{

        const ownwerHero = 'Marvel';
        const getOwnerHero = getHeroesByOwner(ownwerHero);
        //Para comparar objectos se utiliza el toEqual
        //toBeFalsy: para valores negativos o undefined o false
        

        expect(getOwnerHero.length).toBe(2);

        expect(getOwnerHero).toEqual(heroes.filter( (heroe) => heroe.owner === ownwerHero ))
    });
});
