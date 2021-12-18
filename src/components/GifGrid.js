import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import '../index.css';

export const  GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <div className='Contenedor-titulo'>
          
       
            {loading && <p className= "card animate__animated animate__flash">Loading</p> }
       
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                    ))
                }
            </div>
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
