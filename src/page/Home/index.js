import React from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import catalogData from '../../components/Table/sampledata';
import librosServices from '../../services/librosServices';

const getHeadings = () => {
    return Object.keys(catalogData[0]);
}

function View() {
 
    console.log(librosServices.datosHome());
    return (
        <>
            <Layout>
                <Table theaders= {getHeadings()} tbody={catalogData} />
            </Layout>            
        </>
    )
}
       
export default View;
