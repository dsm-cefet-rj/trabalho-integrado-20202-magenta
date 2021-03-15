import React, { Component } from 'react';

import Nav from '../../Components/nav/Nav';
import TableDemands from '../../Components/tables/TableDemands';

import AddModal from '../Modals/addModal/AddModal';
import EditModal from '../Modals/editModal/EditModal';
import DeleteModal from '../Modals/deleteModal/DeleteModal';
import "../../Styles/css/estilo.css"

export default function Messages({ history }) {
    return (
        <React.Fragment>
            <Nav />
            <div className="App">
                <div className="container-xl">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2>Mensagens</h2>
                                    </div>
                                    <div className="col-sm-6">
                                    </div>
                                </div>


                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}