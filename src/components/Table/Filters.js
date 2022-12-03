import React from 'react';
import { searchService }  from '../../services/librosServices'


const Filters = ({columns, setMydata, token, presetPath}) =>{
    const mymap =new Map();

    async function handleSubmit(e) {
        e.preventDefault();


        const data = [...mymap.entries()];
        let asString = '?'+data
            .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
            .join('&');
        asString= asString.toLowerCase();
        console.log(asString);
        let mypath = [presetPath, asString].join('/');

        let response = await searchService(token, mypath);   
             if(response.status) {
                setMydata(response.data);
            }
        
        let inputs = document.querySelectorAll(".filter-input");
        for (let i = 0; i < inputs.length; i++) {
            let item = inputs[i];
            item.value="";
          }  
    };

        
        
    return (
        <>
        <div className='filters-container'>
            <div className='filters-form'>
                Filtrar Resultados
                <form id='filters-form'>
                    {columns.map((column)=>{
                        if (! column.disableFilterBy) {
                            return ( 
                                <>
                                    <label>{column.Header}: </label>
                                    <span></span>
                                    <input className='filter-input' type='text' id='`${column.Header}`' onChange={(e) => mymap.set (`${column.Header}`, e.target.value)}></input>
                                </>
                            )
                        }
                    })}
                    <div className='button-container'>
                        <button id='submit-filters' type='submit' onClick={handleSubmit}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>        
        </>
    )

}

export {Filters}