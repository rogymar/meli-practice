import React from "react";

export default function TextField () {
    return (
        <div>
            <input
            className='w-full'
            type='text' 
            placeholder='Nunca dejes de buscar...'
            id='search' />
        </div>
    )
}