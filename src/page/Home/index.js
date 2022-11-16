import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import {getLibros} from '../../services/librosServices';

const getHeadings = () => {
    let catalogData;
    return Object.keys(catalogData[0]);
}


function View() {
    const [mydata, setMydata] = useState();
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
           
            </Layout>            
        </>
    )
}
       
export default View;
