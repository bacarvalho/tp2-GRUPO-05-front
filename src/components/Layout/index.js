import React, { useState } from 'react';
import Header from './Header';
import {isLoggedUser} from '../../services/OauthServices';

function Layout({children}) {
    return (
        <>
            <div className='layout-container'>
                <Header isLogged={isLoggedUser()}/>
                <div className='backgorund-main'>
                    {children}
                </div>
            </div>
        </>

    )
}

export default Layout;