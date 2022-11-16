import React from 'react';
import Layout from '../../components/Layout';
import librosServices from '../../services/librosServices';
import { Table } from '../../components/Table';


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
