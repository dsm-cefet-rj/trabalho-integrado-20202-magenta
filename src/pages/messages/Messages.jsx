import React, { Component } from 'react';

import Nav from '../../components/nav/Nav';
import TableDemands from '../../components/tables/TableDemands';
import Clearfix from '../../components/clearfix/Clearfix';
import AddModal from '../modals/addModal/AddModal';
import EditModal from '../modals/editModal/EditModal';
import DeleteModal from '../modals/deleteModal/DeleteModal';
import "../../styles/css/estilo.css"

export default function Messages({ history }) {
    return (
        <>
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
                <AddModal/>
                <EditModal/>
                <DeleteModal/>
            </div>
        </>
    );
}