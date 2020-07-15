import heroes from '../data/heroes';

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      }
      else {
        reject('No se encontró el héroe');
      }
    }, 2000);
  });
};

const getHeroeById = (id) => {
  return heroes.find( hero => id === hero.id );
};
