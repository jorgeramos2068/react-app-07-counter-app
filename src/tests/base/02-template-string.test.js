import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
  test('Prueba en el método getSaludo', () => {
    const nombre = 'Clark';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test('Test del método getSaludo cuando no se manda argumento', () => {
    const saludo = getSaludo();
    expect(saludo).toBe(`Hola Batman`);
  });
});
