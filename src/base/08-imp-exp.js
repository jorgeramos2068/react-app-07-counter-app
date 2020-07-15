import heroes, { owners } from '../data/heroes';

export const getHeroById = (id) => {
  return heroes.find( hero => id === hero.id );
};

export const getHeroesByOwner = (owner) => {
  return heroes.filter( hero => owner === hero.owner );
}
