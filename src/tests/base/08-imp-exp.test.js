import { getHeroById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de héroes', () => {
  test('Debe de retornar un héroe por id', () => {
    const id = 1;
    const heroe = getHeroById(id);
    const heroeData = heroes.find(h => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test('Debe de retornar undefined si el héroe no existe', () => {
    const id = 10;
    const heroe = getHeroById(id);
    expect(heroe).toBe(undefined);
  });

  test('Debe retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroesDC = getHeroesByOwner(owner);
    const heroesTest = heroes.filter(h => h.owner === owner);
    expect(heroesDC).toEqual(heroesTest);
  });

  test('Debe retornar un arreglo con lo héroes de Marvel', () => {
    const owner = 'Marvel';
    const heroesDC = getHeroesByOwner(owner);
    const heroesTest = heroes.filter(h => h.owner === owner);
    expect(heroesDC.length).toBe(heroesTest.length);
  });
});
