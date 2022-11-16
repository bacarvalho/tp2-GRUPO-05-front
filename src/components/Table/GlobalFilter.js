import React from 'react';

export const GlobalFilter = ({ filter, setFilter}) => {
    return (
        <div id='global-filter'>
            Buscar: {' '}
            <input value = {filter || ''} onChange={ e => setFilter (e.target.value) } />
        </div>
    )
}