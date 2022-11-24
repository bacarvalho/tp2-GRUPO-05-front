import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
//import MOCKDATA from './MOCKDATA'
import {COLUMNS} from './myBooksColumns'
import Table from '../../components/Table'
import './styles.desktop.css'
import { datosMisLibros } from '../../services/librosServices'
import { getTokenUser, isLoggedUser } from '../../services/OauthServices';

function View() {
    const [myData, setMydata] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await datosMisLibros(getTokenUser());   
            if(response.status) {
                setMydata(response.data);
            }
        }
        getData();
    }, []);
    
    return(
        <>
            <Layout>
                <h1>Mi Biblioteca</h1>
                <div className='my-books-container'>
                    {isLoggedUser() ? (
                    <span>
                        <Table data = {myData} columns = {COLUMNS}/>
                        <div className='buttons-container'>
                        <button id='add-book'>Nuevo Libro</button>
                        </div>
                    </span>
                    ) : 
                    <span>Debes ingresar para acceder a este recurso</span>
                    }
                </div>
                
            </Layout>
        </>
    )

}

export default View;
