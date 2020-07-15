import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await', () => {
  test('Debe de retornar el url de la imagen', const () => {
    const url = await getImagen();
    expect(url).includes('https://')).toBe(true);
  });
});
