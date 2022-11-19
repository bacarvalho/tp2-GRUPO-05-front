import React from 'react';
import Layout from '../../components/Layout';
import MOCKDATA from './MOCKDATA'
import {COLUMNS} from './myBooksColumns'
import Table from '../../components/Table'
import './styles.desktop.css'


function View() {
    return(
        <>
            <Layout>
                <h1>Mi Biblioteca</h1>
                <Table data = {MOCKDATA} columns = {COLUMNS}/>
            </Layout>
        </>
    )
}

export default View;
