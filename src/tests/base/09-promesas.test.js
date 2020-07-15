import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
  test('Debe de retornar un héroe con función async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0]);
        done();
      });
  });

  test('Debe de retornar un error si el héroe con función async no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .catch(error => {
        expect(error).toBe('No se encontró el héroe');
        done();
      });
  });
});
