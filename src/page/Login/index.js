import React from 'react';
import Layout from '../../components/Layout';
import Login from '../../components/Login';


function View(pops) {
    const {islogged} = props;

    return (
        <Login islogged={islogged}/>     
    )
}
       
export default View;
