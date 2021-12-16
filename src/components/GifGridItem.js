import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({tittle,url}) => {

    return (
        <div className = "card animate__animated animate__fadeIn">
           <img className='Gifs' src = {url} alt={tittle} />
        </div>
    )
}

GifGridItem.propTypes = {
    tittle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}



