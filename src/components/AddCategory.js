import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState("");

    const handeInputChange = (e) =>{
        setinputValue(e.target.value)
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
            <div>
                <input
                    type="text" 
                    value={inputValue}
                    onChange={ handeInputChange}
                />
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };
