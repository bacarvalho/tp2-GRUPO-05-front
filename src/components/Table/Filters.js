import React from 'react';

export const Filters = ({columns}) =>{
    console.log(columns);
    return (
        <div className='filters-container'>
        <div className='filters-form'>
            Filtrar Resultados
            <form id='filters-form'>
                {columns.map((column)=>{
                    if (! column.disableFilterBy) {
                        return ( 
                            <>
                                <label for='`${column.Header}`'>{column.Header}: </label>
                                <span></span>
                                <input type='text' id=' `${column.Header}`'></input>
                            </>
                        )
                    }
                })}
                <div className='button-container'>
                    <button id='submit-filters'>Enviar</button>
                </div>
            </form>
        </div>
    </div>
    )

}