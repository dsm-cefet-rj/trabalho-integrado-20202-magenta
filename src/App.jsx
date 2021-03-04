import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import './index.css';

export default props => (
    <BrowserRouter>
        <div className="app">
            <Routes/>
        </div>
    </BrowserRouter>
)
