import React from 'react';
import {GifGrid} from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs');
 
describe('Tests for GifGrid component', () => {
    const category = 'Hola Mundo';

    // const wrapper = shallow(<GifGrid category={category}/>);
 
    test('debe mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot(); 
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id:'abc',
            url:'https://localhost/dasd/cualquiercosa',
            tittle:'Cualquier cosa'
        }]; 

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length   )

    })
    

   
    



})