import React from 'react';
import CEBooks from '../../components/Create-Edit-Books';
import { useLocation } from "react-router-dom";


function View() {
    const location = useLocation();
    
    
    return (
        <>
        <CEBooks libro={location.state?.data?.Libro}> </CEBooks>
        </>
    )
}

export default View;
