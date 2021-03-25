import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import {store} from './store';
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 

import './index.css';

export default props => (
    <BrowserRouter>
        <div className="app">
            <Routes/>
        </div>
    </BrowserRouter>
)
