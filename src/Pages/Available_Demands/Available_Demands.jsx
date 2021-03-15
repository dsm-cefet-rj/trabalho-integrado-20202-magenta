import React, { Component, useState, useEffect } from 'react';

import Nav from '../../Components/nav/Nav';
import TableDemands from '../../Components/tables/TableDemands';
import AddModal from '../Modals/addModal/AddModal';
import EditModal from '../Modals/editModal/EditModal';
import DeleteModal from '../Modals/deleteModal/DeleteModal';

import "../../Styles/css/estilo.css"



export default function Available_Demands({ history }) {


    const [demands, setDemands] = useState([]);

    const [title, setTitle] = useState('');
    const [hours, setHours] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [deadline, setDeadline] = useState('');
    const [description, setDescription] = useState('');

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
                            <th>Titulo</th>
                            <th>Especialidade</th>
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
                                    <td>{demand.title}</td>
                                    <td>{demand.specialty}</td>
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
    function save(event) {
        event.preventDefault()
        const code = 1;
        const newdemand = { code, title, hours, specialty, deadline, description} 
        setDemands([...demands, newdemand]);
    }

    function AddModal() {

        return (
            //Add Modal HTML
            <React.Fragment>
                <div id="addEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Inserir demanda</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Titulo da Demanda</label>
                                        <input type="text"
                                                className="form-control"
                                                value={title}
                                                onChange={event => setTitle(event.target.value)}
                                                required />
                                    </div>
                                    <div className="form-group">
                                        <label>Estimativa de Horas</label>
                                        <input type="text"
                                               className="form-control"
                                               value={hours}
                                               onChange={event => setHours(event.target.value)}
                                               required />
                                    </div>
                                    <div className="form-group">
                                        <label>Especialidade Necessária</label>
                                        <input type="text"
                                               className="form-control"
                                               value={specialty}
                                               onChange={event => setSpecialty(event.target.value)}
                                               required />
                                    </div>
                                    <div className="form-group">
                                        <label>Prazo de Entrega</label>
                                        <input type="date"
                                                className="form-control"
                                                value={deadline}
                                                onChange={event => setDeadline(event.target.value)}
                                                required />
                                    </div>
                                    <div className="form-group">
                                        <label>Descrição da Demanda</label>
                                        <textarea
                                            className="form-control"
                                            value={description}
                                            onChange={event => setDescription(event.target.value)}
                                            required 
                                         />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Fechar" />
                                    <input type="submit" className="btn btn-success" onClick={event => save(event)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                                            <h2>Visualizar Minhas Demandas</h2>
                                        </div>
                                        <div className="col-sm-6">
                                        </div>
                                    </div>
                                </div>
                                {renderRows()}
                            </div>
                        </div>
                    </div>
                    {AddModal()} 
                    <EditModal />
                    <DeleteModal />
                </div>
            </>
        );
    }