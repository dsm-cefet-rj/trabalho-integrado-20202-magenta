import './Nav.css';
import React from 'react';
import avatar from '../../styles/assets/avatar.jpeg';
import {Link} from 'react-router-dom';

export default props =>
    <aside className="menu-area">
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            
            <a href="#" className="navbar-brand"><i className="fa fa-clock-o" />Hour<b>Exchange</b></a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="navbar-nav ml-auto">
                <Link to="/main">
                    <a className="nav-item nav-link"><i className="fa fa-home" /><span>Principal</span></a>
                </Link>
                <Link to="/demands">
                    <a className="nav-item nav-link"><i className="fa fa-gears" /><span>Demandas</span></a>
                </Link>
                <Link to="/messages">
                    <a className="nav-item nav-link"><i className="fa fa-envelope" /><span>Mensagens</span></a>
                </Link>

                <div className="nav-item dropdown">
                <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action"><img src={avatar} className="avatar" alt="Avatar" /> Gabriel Pacheco <b className="caret" /></a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item"><i className="fa fa-user-o" /> Perfil</a>
                  <a href="#" className="dropdown-item"><i className="fa fa-calendar-o" /> Calendário</a>
                  <a href="#" className="dropdown-item"><i className="fa fa-sliders" /> Configurações</a>
                  <div className="divider dropdown-divider" />
                  <a href="#" className="dropdown-item"><i className="material-icons"></i> Logout</a>
                </div>
              </div>
            </div>
        </nav>
    </aside>