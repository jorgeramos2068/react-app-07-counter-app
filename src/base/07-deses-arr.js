const personajes = ['Batman', 'Robin', 'Superman'];
const [, , superman] = personajes;

export const retornaArreglo = () => {
  return ['abc', 123];
};

// Tarea
const useState = (valor) => {
  return [valor, () => { console.log('Hola Mundo'); }];
};
