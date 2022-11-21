import React from 'react';
import Login from '../../components/Login';
import { isLoggedUser } from '../../services/OauthServices';

function View() {

    return (
        <Login islogged={isLoggedUser()}/>     
    )
}
       
export default View;
