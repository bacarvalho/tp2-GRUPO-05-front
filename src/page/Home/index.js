import React from 'react';
import Layout from '../../components/Layout';
import catalogData from '../../components/Table/sampledata';
import librosServices from '../../services/librosServices';
import { Table } from '../../components/Table';

const getHeadings = () => {
    return Object.keys(catalogData[0]);
}

function View() {
 
    //console.log(librosServices.datosHome());
    return (
        <>
            <Layout>
                <Table  />
            </Layout>            
        </>
    )
}
       
export default View;
