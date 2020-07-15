import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en desestructuración', () => {
  test('Debe retornar un string y un número', () => {
    const arr = retornaArreglo();
    expect(arr).toEqual(['abc', 123]);
  });
});
