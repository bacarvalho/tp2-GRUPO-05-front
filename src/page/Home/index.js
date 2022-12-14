import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import Table  from '../../components/Table';
import {getLibros, getLibrosLogged} from '../../services/librosServices';
import { COLUMNS } from './HomeColumns'
import { Quote } from '../../components/Quote'
import {Filters} from '../../components/Table/Filters';
import { getTokenUser, isLoggedUser } from '../../services/OauthServices';


function View() {
    const [mydata, setMydata] = useState([]);
   
    useEffect(() => {
        if(isLoggedUser()) {
            const getDataLogged = async () => {
                let response = await getLibrosLogged(getTokenUser());   
                if(response.status) {
                    setMydata(response.data);
                }
            }
            getDataLogged();
        } else {
            const getData = async () => {
                let response = await getLibros();   
                if(response.status) {
                    setMydata(response.data);
                }
            }
            getData();
        }
    }, []); 


    return (
        <>
            <Layout>
                    <Quote />
                    <Filters columns = {COLUMNS()} setMydata={setMydata} token={null}/>
                    <Table data = {mydata} columns = {COLUMNS()}/>
            </Layout>
        </>
    )
}

export default View;
