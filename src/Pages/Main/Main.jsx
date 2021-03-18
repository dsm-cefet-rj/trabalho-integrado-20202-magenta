import React from 'react';


import Nav from '../../Components/nav/Nav';
import TableDemands from '../../Components/tables/TableDemands';
import Clearfix from '../../Components/clearfix/Clearfix';
import AddModal from '../Modals/addModal/AddModal';
import EditModal from '../Modals/editModal/EditModal';
import DeleteModal from '../Modals/deleteModal/DeleteModal';
import EditProfileButton from '../../Components/buttons/EditProfileButton'
import "../../Styles/css/estilo.css"

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
                                <div className="content">
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