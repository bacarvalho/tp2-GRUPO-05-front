import React from 'react';
import Layout from '../../components/Layout';
import librosServices from '../../services/librosServices';



function View() {
 
    console.log(librosServices.datosHome());
    return (
        <>
            <Layout>
                <Table data={librosServices.datosHome()}>

                </Table>
            </Layout>        
        </>
    )
}       
export default View;
