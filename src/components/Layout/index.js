import React, { Children, useState } from 'react';
import Header from './Header'

function Layout({children}) {
    const [isLogged, setIsLogged] = useState(true);

    return (
        <>
            <div>
                <Header isLogged={isLogged}/>
                <div className='backgorund-main'>
                    {children}
                </div>
            </div>
        </>

    )
}

export default Layout;