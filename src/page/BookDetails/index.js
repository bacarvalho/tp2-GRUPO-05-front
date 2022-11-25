import React from 'react';
import ViewBook from '../../components/ViewBook';
import { useLocation } from "react-router-dom";

function View() {

    const location = useLocation();

    return (
        <>
            <ViewBook book={location.state.data} />
        </>
    )
}

export default View;
