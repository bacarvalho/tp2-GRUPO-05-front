import React, { Children } from 'react';
import Header from './Header'

function Layout({children}) {
    return (
        <>
            <div>
                <Header />
                <div className='backgorund-main'>
                    {children}
                </div>
            </div>
        </>

    )
}

export default Layout;