import React, { Component } from 'react';


import Nav from '../src/components/nav/Nav';
import AddModal from './pages/modals/addModal/AddModal';
import EditModal from './pages/modals/editModal/EditModal';
import DeleteModal from './pages/modals/deleteModal/DeleteModal';
import "../src/css/estilo.css"

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
                                        <h2>Visualizar Demandas</h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Criar nova Demanda</span></a>
                                        <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Cancelar Demanda</span></a>
                                    </div>
                                </div>
                            </div>
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
                                    <tr>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                                                <label htmlFor="checkbox1" />
                                            </span>
                                        </td>
                                        <td>#001</td>
                                        <td>Rodrigo Meira</td>
                                        <td>25/12/2020</td>
                                        <td><span className="status text-info">•</span> Finalizado</td>
                                        <td>
                                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Editar"></i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Cancelar"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="checkbox2" name="options[]" defaultValue={1} />
                                                <label htmlFor="checkbox2" />
                                            </span>
                                        </td>
                                        <td>#002</td>
                                        <td>João Victor</td>
                                        <td>05/05/2021</td>
                                        <td><span className="status text-success">•</span> Ativo</td>
                                        <td>
                                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Editar"></i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Cancelar"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="checkbox3" name="options[]" defaultValue={1} />
                                                <label htmlFor="checkbox3" />
                                            </span>
                                        </td>
                                        <td>#003</td>
                                        <td>Henrique Xou</td>
                                        <td>06/06/2021</td>
                                        <td><span className="status text-success">•</span> Ativo</td>
                                        <td>
                                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Editar"></i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Cancelar"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="checkbox4" name="options[]" defaultValue={1} />
                                                <label htmlFor="checkbox4" />
                                            </span>
                                        </td>
                                        <td>#004</td>
                                        <td>Gabriel Pacheco <b>[Eu]</b></td>
                                        <td>05/06/2021</td>
                                        <td><span className="status text-warning">•</span> Espera</td>
                                        <td>
                                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Editar"></i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Cancelar"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="checkbox5" name="options[]" defaultValue={1} />
                                                <label htmlFor="checkbox5" />
                                            </span>
                                        </td>
                                        <td>#005</td>
                                        <td>Dennis Santos</td>
                                        <td>04/02/2021</td>
                                        <td><span className="status text-danger">•</span> Cancelado</td>
                                        <td>
                                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Editar"></i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Cancelar"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="clearfix">
                                <div className="hint-text">Mostrando <b>5</b> de <b>25</b> Demandas</div>
                                <ul className="pagination">
                                    <li className="page-item disabled"><a href="#">Anterior</a></li>
                                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                                    <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                                    <li className="page-item"><a href="#" className="page-link">Próxima</a></li>
                                </ul>
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