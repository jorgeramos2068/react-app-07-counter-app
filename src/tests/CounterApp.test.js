import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Tests en <CounterApp />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('Debe mostrar <CounterApp /> correctamente con sus valores por defecto', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar <CounterApp /> con el valor de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const textToFind = wrapper.find('h2').text();
    expect(textToFind).toBe(`${value}`);
  });

  test('Debe de incrementar contador con el botón +1', () => {
    // Simular click
    wrapper.find('button').at(0).simulate('click');
    const textToFind = wrapper.find('h2').text().trim();
    expect(textToFind).toBe('11');
  });

  test('Debe de decrementar contador con el botón -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const textToFind = wrapper.find('h2').text().trim();
    expect(textToFind).toBe('9');
  });

  test('Debe de resetear al valor por defecto con el botón reset', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const textToFind = wrapper.find('h2').text();
    expect(textToFind).toBe(`${value}`);
  });
});
