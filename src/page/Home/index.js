import React from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import catalogData from '../../components/Table/sampledata';

const getHeadings = () => {
    return Object.keys(catalogData[0]);
}

function View() {
    return (
        <>
            <Layout>
                <Table theaders= {getHeadings()} tbody={catalogData}>

                </Table>
            </Layout>            
        </>
    )
}       
export default View;
