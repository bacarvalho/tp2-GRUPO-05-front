import React, {useState} from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import catalogData from '../../components/Table/sampledata';
import librosServices from '../../services/librosServices';

const getHeadings = () => {
    return Object.keys(catalogData[0]);
}


function View() {
    const [mydata, setMydata] = useState();
    function getData(){
        librosServices.datosHome()
            .then (response => {return response})
            .catch (error => console.log(error));
    }

    setMydata(librosServices.datosHome().then ((response) => {return response} ));
    console.log(mydata);
//    console.log(librosServices.datosHome());

    // const myData = librosServices.datosHome();
    // console.log(myData.PromiseResult);
    // console.log(librosServices.datosHome().then(json => console.log('rta', json)));
   
    
    // setMydata(librosServices.datosHome());


    return (
        <>
            <Layout>
                <Table theaders= {getHeadings()} tbody={catalogData} />
            </Layout>            
        </>
    )
}
       
export default View;
