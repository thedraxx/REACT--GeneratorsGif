import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState("Search a GIF!");

    const handeInputChange = (e) =>{
        setinputValue(e.target.value)

        console.log('handeInputChange llamado')
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
  
        if( inputValue.trim().length > 2){
            setCategories(categories => [ inputValue,...categories,]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <p>{inputValue}</p>
                <input
                    type="text" 
                    value={inputValue}
                    onChange={ handeInputChange}
                />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };
