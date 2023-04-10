import { getUser, getUsuarioActivo } from "../../src/base/05-funciones"

describe('Pruebas en 05-funciones',()=>{
    test('getUser debe retornar un objecto',()=>{
        //Los objectos a diferencia de los primitivos
        //se comparan en ubicacion en memoria
        const testUser = {
            uid : 'ABC123',
            username : 'El_Papi1502'
        }
        const user = getUser();
        expect(testUser).toStrictEqual(user)
    });

    test('getUsuarioActivo debe retornar un objecto',()=>{
        const name = 'David';
        const testUsuarioActivo = ( nombre ) =>({
            uid: 'ABC567',
            username: nombre
        });
        const usuarioActivo=getUsuarioActivo(name);
        const usuarioTestActivo = testUsuarioActivo(name)
        expect(usuarioTestActivo).toStrictEqual(usuarioActivo);
    });
});
