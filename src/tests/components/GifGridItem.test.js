import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const tittle = 'Un Titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem  tittle = {tittle} url = {url}/>);
    
    test('debe mostrar el test Correctamente', () => {
        
        expect (wrapper).toMatchSnapshot();
    })
    

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(tittle);
    });

    test('debe de tener un animate__fadein', () => {
        
        const div = wrapper.find('div');
        const valor = div.prop('className');
        let palabras = valor.split(' ');
        expect(palabras[2]).toBe('animate__fadeIn');
    })
    
    


    
})
