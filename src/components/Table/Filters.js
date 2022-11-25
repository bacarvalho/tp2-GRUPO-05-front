import React, {useState} from 'react';
import { searchService }  from '../../services/librosServices'

const mymap =new Map();

async function handleSubmit(e) {
    e.preventDefault();
    '/?'

    const response = await searchService(queryParams);
	//const response = await LoginUser(username, password);
	// if(response.status) {
	// 	const cookie = new Cookies();
	// 	cookie.set('login', response.data);
	// 	navigate("/");
	// } else {
	// 	setIsDisabled(false);
	// 	setErrorMessage(response.error.message);
	// }
    console.log('triggered event');
    console.log(mymap);

  };

export const Filters = ({columns}) =>{

    console.log(columns);
    return (
        <div className='filters-container'>
        <div className='filters-form'>
            Filtrar Resultados
            <form id='filters-form' onSubmit= {handleSubmit}>
                {columns.map((column)=>{
                    if (! column.disableFilterBy) {
                        return ( 
                            <>
                                <label for='`${column.Header}`'>{column.Header}: </label>
                                <span></span>
                                <input type='text' id='`${column.Header}`' onChange={(e) => mymap.set (`${column.Header}`, e.target.value)}></input>
                            </>
                        )
                    }
                })}
                <div className='button-container'>
                    <button id='submit-filters' type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    </div>
    )

}