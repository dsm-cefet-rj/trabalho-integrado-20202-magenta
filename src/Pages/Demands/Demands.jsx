import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteDemandServer,
        fetchDemands,
        selectAllDemands,
        selectDemandById,
        addDemandServer,
        updateDemandServer,
     } from '../../store/features/demand/DemandSlice';

import { validate as uuidValidate } from 'uuid';
import { NIL as NIL_UUID } from 'uuid';

import Nav from '../../Components/nav/Nav';


import AddButton from '../../Components/buttons/AddButton';
import CancelButton from '../../Components/buttons/CancelButton';
import "../../Styles/css/estilo.css";



export default function Demands(props) {

    const history = useHistory();
    const dispatch = useDispatch()

    const demands = useSelector(selectAllDemands);
    const status = useSelector(state => state.demands.status);
   //const error = useSelector(state => state.demands.error);

    let { id } = useParams();
    id = parseInt(id);

    const demandFound = useSelector(state => selectDemandById(state, id))

    const [demand, setDemand] = useState(id ? demandFound ?? {} : {});

    const [actionType,] = useState(
        id ? demandFound
            ? 'demands/updateDemand'
            : 'demands/addDemand'
            : 'demands/addDemand');

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchDemands())
        } else if (status === 'failed') {
            setTimeout(() => dispatch(fetchDemands()), 2000);
        }
    }, [status, dispatch])



    function handleInputChange(event) {
        setDemand({ ...demand, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (actionType === 'demands/addProjeto') {
            dispatch(addDemandServer(demand));
        } else {
            dispatch(updateDemandServer(demand));
        }
    }

    function handleClickDeleteDemand(id) {
        dispatch(deleteDemandServer(id));
    }

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
                                <tr key={demand.title}>
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
                                        <a className="edit" data-toggle="modal">
                                            <i className="material-icons"
                                                data-toggle="tooltip"
                                                title="Editar"
                                            ></i>
                                        </a>
                                        <a className="delete" data-toggle="modal">
                                            <i className="material-icons"
                                                data-toggle="tooltip"
                                                title="Cancelar"
                                                name="excluir_demand"
                                                onClick={ () => handleClickDeleteDemand(props.demand.id) }
                                            ></i>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    function AddModal() {

        return (
            //Add Modal HTML
            <React.Fragment>
                <div id="addEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Inserir demanda</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Titulo da Demanda</label>
                                        <input type="text"
                                            className="form-control"
                                            value={demand.title}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label>Estimativa de Horas</label>
                                        <input type="number"
                                            className="form-control"
                                            value={demand.hours}
                                            onChange={handleInputChange}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label>Especialidade Necessária</label>
                                        <input type="text"
                                            className="form-control"
                                            value={demand.specialty}
                                            onChange={handleInputChange}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label>Prazo de Entrega</label>
                                        <input type="date"
                                            className="form-control"
                                            value={demand.deadline}
                                            onChange={handleInputChange}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label>Descrição da Demanda</label>
                                        <textarea
                                            className="form-control"
                                            value={demand.description}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Fechar" />
                                    <input type="submit" className="btn btn-success" data-dismiss="modal" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    // function EditModal() {
    //     return (
    //         <React.Fragment>
    //             <div id="addEmployeeModal" className="modal fade">
    //                 <div className="modal-dialog">
    //                     <div className="modal-content">
    //                         <form>
    //                             <div className="modal-header">
    //                                 <h4 className="modal-title">Inserir demanda</h4>
    //                                 <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
    //                             </div>
    //                             <div className="modal-body">
    //                                 <div className="form-group">
    //                                     <label>Titulo da Demanda</label>
    //                                     <input type="text"
    //                                         className="form-control"
    //                                         value={title}
    //                                         onChange={event => setTitle(event.target.value)}
    //                                         required />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label>Estimativa de Horas</label>
    //                                     <input type="text"
    //                                         className="form-control"
    //                                         value={hours}
    //                                         onChange={event => setHours(event.target.value)}
    //                                         required />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label>Especialidade Necessária</label>
    //                                     <input type="text"
    //                                         className="form-control"
    //                                         value={specialty}
    //                                         onChange={event => setSpecialty(event.target.value)}
    //                                         required />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label>Prazo de Entrega</label>
    //                                     <input type="date"
    //                                         className="form-control"
    //                                         value={deadline}
    //                                         onChange={event => setDeadline(event.target.value)}
    //                                         required />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <label>Descrição da Demanda</label>
    //                                     <textarea
    //                                         className="form-control"
    //                                         value={description}
    //                                         onChange={event => setDescription(event.target.value)}
    //                                         required
    //                                     />
    //                                 </div>
    //                             </div>
    //                             <div className="modal-footer">
    //                                 <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Fechar" />
    //                                 <button type="submit" className="btn btn-success close" onClick={event => save(event)}>Editar</button>
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </React.Fragment>
    //     )
    // }

    function DeleteModal() {
        return (
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Cancelar Demanda</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Você tem certeza que quer cancelar essa demanda?</p>
                                <p className="text-warning"><small>Essa ação não poderá ser desfeita.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Voltar" />
                                <input type="submit" className="btn btn-danger" defaultValue="Cancelar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
                                        <AddButton />
                                        <CancelButton />
                                    </div>
                                </div>
                            </div>
                            {renderRows()}
                        </div>
                    </div>
                </div>
                {AddModal()}
                {DeleteModal()}
            </div>
        </>
    );
}

