import './Logo.css';
import{ Link } from 'react-router-dom';
import logo from '../../../assets/logomaterial.png';

import React from 'react';

export default props =>
    <aside className="logo">
        <Link to="/app/dashboard">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>