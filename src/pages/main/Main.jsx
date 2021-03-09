import React, { Component } from 'react';


import Nav from '../../components/nav/Nav';
import TableDemands from '../../components/tables/TableDemands';
import Clearfix from '../../components/clearfix/Clearfix';
import AddModal from '../modals/addModal/AddModal';
import EditModal from '../modals/editModal/EditModal';
import DeleteModal from '../modals/deleteModal/DeleteModal';
import EditProfileButton from '../../components/buttons/EditProfileButton'
import "../../styles/css/estilo.css"

export default function Main({ history }) {
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
                                        <h2>Gabriel Pacheco</h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <EditProfileButton/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="content">
                                    <p>Especialidade: Programador</p>
                                    <p>Idade: </p>
                                    <p>Soft Skills: </p>
                                    <p>Hard Skills: </p>
                                    <p>Resumo: </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddModal />
                <EditModal />
                <DeleteModal />
            </div>
        </>
    );
}