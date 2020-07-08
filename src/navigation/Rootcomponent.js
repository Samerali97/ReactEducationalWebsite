import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FileRoutes from '../navigation/Routes';

const RootComponent = () => {
    return (
        <BrowserRouter>
            <FileRoutes/>
        </BrowserRouter>
    )
}

export default RootComponent;