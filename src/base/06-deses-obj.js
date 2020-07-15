const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'ironman'
}

const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 123,
      lng: 456
    }
  }
};

const { nombreClave, anios, latlng:{ lat, lng } } = useContext(persona);
console.log(nombreClave, anios, lat, lng);
