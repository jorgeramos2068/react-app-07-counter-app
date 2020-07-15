import { getUsuario, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('Debe de retornar un objeto', () => {
    const usuarioTest = {
      uid: '1',
      username: 'usuario01'
    };
    const usuario = getUsuario();
    expect(usuario).toEqual(usuarioTest);
  });

  test('Test del método getActiveUser enviándole un parámetro', () => {
    const nombre = 'Superman';
    const usuarioTest = {
      uid: '2',
      username: nombre
    };
    const usuario = getUsuarioActivo(nombre);
    expect(usuario).toEqual(usuarioTest);
  });
});