import React from 'react';

import "../../styles/css/estilo.css";

export default function TableDemands() {
    return (
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
                    <td>05/05/2021</td><td><span className="status text-success">•</span> Ativo</td>
                    
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

    )
}


