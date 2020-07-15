const nombre = 'Jorge';
const apellido = 'Ramos';

const nombreCompleto = `${nombre} ${apellido}`; // Template string

export function getSaludo(nombre = 'Batman') {
  return `Hola ${nombre}`;
}
