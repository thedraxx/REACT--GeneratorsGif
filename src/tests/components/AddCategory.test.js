import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    
        const setCategories = jest.fn();
        let wrapper = shallow(<AddCategory setCategories = { setCategories } />);

        beforeEach( () => {
            jest.clearAllMocks();
            wrapper = shallow(<AddCategory setCategories = { setCategories } />);
        });

    test('debe de mostrarse correctamete', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: {value}}); 
        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('No debe de postear la informacion con onSubmit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}} );

        expect(setCategories).toHaveBeenCalled();
    })


    test('Debe de llamar el setCategory y limpiar la caja de texto', () => {

        const value = "Hola mundo";

        //Simular el InputChange
        wrapper.find('input').simulate('change', {target: {value}});
 
        //Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}} );

        //SetCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();

        //El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    

    
})
