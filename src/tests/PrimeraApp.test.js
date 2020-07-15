import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Test en <PrimeraApp />', () =>{
  test('Debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola Superman';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el subtítulo enviado por props', () => {
    const saludo = 'Hola Superman';
    const subtitulo = 'Nuevo subtitulo';
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);
    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
