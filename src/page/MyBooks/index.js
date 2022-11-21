import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import MOCKDATA from './MOCKDATA'
import {COLUMNS} from './myBooksColumns'
import Table from '../../components/Table'
import './styles.desktop.css'
import { datosMisLibros } from '../../services/librosServices'
import Cookies from "universal-cookie";

function View() {
    const cookie = new Cookies();

    const [myData, setMydata] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await datosMisLibros(cookie.get('login'));   
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
                <Table data = {myData} columns = {COLUMNS}/>
                <div className='buttons-container'>
                    <button id='add-book'>Nuevo Libro</button>
                </div>
            </Layout>
        </>
    )
}

export default View;
