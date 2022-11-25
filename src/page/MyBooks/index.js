import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Layout from '../../components/Layout';
import {COLUMNS} from './myBooksColumns'
import Table from '../../components/Table'
import './styles.desktop.css'
import { datosMisLibros } from '../../services/librosServices';
import {Filters} from '../../components/Table/Filters';
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

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    console.log("aca")
    navigate('/page/EditCreateBooks');
  }
    
    return(
        <>
            <Layout>
                <h1>Mi Biblioteca</h1>
                <div className='my-books-container'>
                    {isLoggedUser() ? (
                    <span>
                        <Filters columns = {COLUMNS()} setMydata={setMydata} token={getTokenUser()} presetPath={'/user/mis_libros'} />
                        <Table data = {myData} columns = {COLUMNS()}/>
                        <div className='buttons-container'>
                        <button type="submit" id='add-book' onClick={routeChange}>Nuevo Libro</button>
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
