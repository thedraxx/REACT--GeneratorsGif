import React from 'react';
import { shallow } from 'enzyme';
import { GiftExpertApp } from '../../GiftExpertApp';

describe('Pruebas en <GiftExpertApp />', () => {
    
    test('Hacer un snapShoot', () => {
        
        const wrapper = shallow(<GiftExpertApp />);
        expect (wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        
        const categories = ['one punch','dragon Ball'];
        const wrapper = shallow(<GiftExpertApp defaultCategories = {categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);



    })
    
    

})
