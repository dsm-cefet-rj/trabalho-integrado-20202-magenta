import React from 'react';

export default function DeleteModal() {

    return (
        //Delete Modal HTML
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
};