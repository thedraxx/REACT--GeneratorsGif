import React from 'react'

export const GifGridItem = ({id,tittle,url}) => {

    return (
        <div className = "card animate__animated animate__fadeIn">
           <img src = {url} alt={tittle} />
        </div>
    )
}

