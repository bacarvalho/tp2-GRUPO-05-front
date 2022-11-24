import React, {useState, useEffect} from 'react';
import { datosMisPrestamos } from '../../services/librosServices';
import Table from '../../components/Table';
import Layout from '../../components/Layout';
import { COLUMNS } from './MyLoansColumns'
import CatalogButton from '../../components/Buttons/CatalogButton';

import './styles.desktop.css'
import { getTokenUser, isLoggedUser } from '../../services/OauthServices';

function View() {
    const [myData, setMydata] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await datosMisPrestamos(getTokenUser());   
            if(response.status) {
                setMydata(response.data);
            }
        }
        getData();
    }, []);

    return (
        <>
            <Layout>
                <h1>Mis Préstamos</h1>
                <div className='my-loans-container'>
                    {isLoggedUser() ? (
                        <span>
                            <Table data = {myData} columns = {COLUMNS()}/>
                            <CatalogButton />
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