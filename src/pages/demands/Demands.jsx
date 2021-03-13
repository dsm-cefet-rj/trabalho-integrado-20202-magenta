import React, { Component, useState, useEffect } from 'react';

import Nav from '../../components/nav/Nav';
import TableDemands from '../../components/tables/TableDemands';
import Clearfix from '../../components/clearfix/Clearfix';
import AddModal from '../modals/addModal/AddModal';
import EditModal from '../modals/editModal/EditModal';
import DeleteModal from '../modals/deleteModal/DeleteModal';

import AddButton from '../../components/buttons/AddButton';
import CancelButton from '../../components/buttons/CancelButton';
import "../../styles/css/estilo.css"

export default function Demands({ history }) {
    var objeto = {
        "code":"001",
        "requester":"Danilo",
        "deadine":"05/04/2021",
        "status":"Ativo"
    }

    const [demands, setDemands] = useState([objeto]);

    function renderRows() {
        return (
            <React.Fragment>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="selectAll" />
                                    <label htmlFor="selectAll" />
                                </span>
                            </th>
                            <th>Código</th>
                            <th>Solicitante</th>
                            <th>Prazo</th>
                            <th>Status</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>

                        {demands.map(demand => {
                            return (
                                <tr key={demand.code}>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                                            <label htmlFor="checkbox1" />
                                        </span>
                                    </td>
                                    <td>{demand.code}</td>
                                    <td>{demand.requester}</td>
                                    <td>{demand.deadline}</td>
                                    <td>{demand.status}</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Editar"></i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Cancelar"></i></a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
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
                                        <h2>Visualizar Demandas</h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <AddButton />
                                        <CancelButton />
                                    </div>
                                </div>
                            </div>
                            {renderRows()}
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