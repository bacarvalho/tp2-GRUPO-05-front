import React, {useState} from 'react';
import { searchService }  from '../../services/librosServices'
import { useSearchParams } from 'react-router-dom';

const mymap =new Map();

async function handleSubmit(e, setMydata) {
    // e.preventDefault();
    // let queryParams = '/?'
    
    // for (let [key, value] of  mymap.entries()) {
    //     queryParams = queryParams + (key + "=" + value +"&");
    // }
    // console.log('query',queryParams);

    // const response = await searchService(queryParams);
	// //const response = await LoginUser(username, password);
	//  if(response.status) {
	// // 	const cookie = new Cookies();
	// 	cookie.set('login', response.data);
	// 	navigate("/");
	// } else {
	// 	setIsDisabled(false);
	// 	setErrorMessage(response.error.message);
    //     console.log("data",response.data);
	//  }

        e.preventDefault();
    //const formData = new FormData(e.target);
    const data = [...mymap.entries()];
    const asString = '/?'+data
        .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join('&');
    console.log(asString);

    const response = await searchService(asString.toLowerCase());
    if (response.status) {
        setMydata(response);
        console.log(response);
        //re-renderizar tabla con resultados
        } else {
        	//setIsDisabled(false);
        	//setErrorMessage(response.error.message);
            console.log("data",response.data);
         }

  };

export const Filters = ({columns, setMydata}) =>{

    return (
        <div className='filters-container'>
        <div className='filters-form'>
            Filtrar Resultados
            <form id='filters-form' onSubmit= {handleSubmit }>
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