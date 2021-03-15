import React from 'react';

export default function AddModal() {

    return (
        //Add Modal HTML
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
                                <input type="text" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Estimativa de Horas</label>
                                <input type="number" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Especialidade Necessária</label>
                                <select name="especialidade" className="form-control" required>
                                    <option value={0} />
                                    <option value={1}>Programador</option>
                                    <option value={2}>Gerente</option>
                                    <option value={3}>Suporte</option>
                                    <option value={4}>DBA</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Prazo de Entrega</label>
                                <input type="date" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Descrição da Demanda</label>
                                <textarea className="form-control" required defaultValue={""} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Voltar" />
                            <input type="submit" className="btn btn-success" defaultValue="Registrar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

