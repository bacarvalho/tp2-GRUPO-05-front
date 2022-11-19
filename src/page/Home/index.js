import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import Table  from '../../components/Table';
import {getLibros} from '../../services/librosServices';
import { COLUMNS } from './HomeColumns'



function View() {
    const [mydata, setMydata] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await getLibros();
            if(response.status) {
                setMydata(response.data);
            }
        }
        getData();
    }, []);

    return (
        <>
            <Layout>
                <Table data = {mydata} columns = {COLUMNS}/>
            </Layout>
        </>
    )
}

export default View;
