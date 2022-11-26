import React, {useState, useEffect} from 'react';
import CEBooks from '../../components/Create-Edit-Books';
import {useLocation} from "react-router-dom";
import {getGeneros} from '../../services/librosServices';
import { getTokenUser } from "../../services/OauthServices";

function View() {
    const location = useLocation();
    const [mydata, setMydata] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await getGeneros(getTokenUser());   
            if(response.status) {
                setMydata(response.data);
            }
        }
        getData();
    }, []); 
    
    return (
        <>
        <CEBooks libro={location.state?.data?.Libro} generos={mydata}> </CEBooks>
        </>
    )
}

export default View;
