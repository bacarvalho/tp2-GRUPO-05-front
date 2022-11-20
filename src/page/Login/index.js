import React from 'react';
import Login from '../../components/Login';


function View(props) {
    const {islogged} = props;

    return (
        <Login islogged={islogged}/>     
    )
}
       
export default View;
