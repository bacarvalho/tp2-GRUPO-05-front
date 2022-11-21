import React, {useState, useEffect} from 'react';
import { datosMisPrestamos } from '../../services/librosServices';
import Table from '../../components/Table';
import Layout from '../../components/Layout';
import { COLUMNS } from './MyLoansColumns'
import { Link } from 'react-router-dom';
import CatalogButton from '../../components/Buttons/CatalogButton';

import './styles.desktop.css'

function View() {
    const [mydata, setMydata] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await datosMisPrestamos();   
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
                <Table data = {mydata} columns = {COLUMNS}/>
                <CatalogButton />
            </Layout>
        </>
    )
}

export default View;