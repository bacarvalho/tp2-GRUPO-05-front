import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import Table  from '../../components/Table';
import {getLibros} from '../../services/librosServices';


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
    console.log("MYDATA", mydata);

    return (
        <>
            <Layout>
                <Table {...mydata}/>
            </Layout>
        </>
    )
}

export default View;
