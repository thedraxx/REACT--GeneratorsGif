import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export function GiftExpertApp({defaultCategories = []}) 
{
    const [categories, setCategories] = useState(defaultCategories);
    return (
        <>
            <h2 className ="tittle">GIF GENERATOR</h2>
            <AddCategory setCategories = {setCategories}/>

            <hr />
            <ol>
                
                {  
                    categories.map( (category) => (
                        <GifGrid 
                            key = {category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

