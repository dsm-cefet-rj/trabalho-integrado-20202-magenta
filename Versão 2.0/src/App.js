import React, { Component} from 'react'
import avatar from './avatar.jpeg'

class App extends Component {
  render(){
    return(
      <div className="App">
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <a href="#" className="navbar-brand"><i className="fa fa-clock-o" />Hour<b>Exchange</b></a>  		
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collection of nav links, forms, and other content for toggling */}
          <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">		
            <form className="navbar-form form-inline">
              <div className="input-group search-box">								
                <input type="text" id="search" className="form-control" placeholder="Pesquise Aqui..." />
                <span className="input-group-addon"><i className="material-icons"></i></span>
              </div>
            </form>
            <div className="navbar-nav ml-auto">
              <a href="#" className="nav-item nav-link"><i className="fa fa-home" /><span>Principal</span></a>
              <a href="#" className="nav-item nav-link active"><i className="fa fa-gears" /><span>Demandas</span></a>
              <a href="#" className="nav-item nav-link"><i className="fa fa-envelope" /><span>Mensagens</span></a>		
              <a href="#" className="nav-item nav-link"><i className="fa fa-bell" /><span>Notificações</span></a>
              <div className="nav-item dropdown">
                <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action"><img src={avatar} className="avatar" alt="Avatar" /> Gabriel Pacheco <b className="caret" /></a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item"><i className="fa fa-user-o" /> Perfil</a>
                  <a href="#" className="dropdown-item"><i className="fa fa-calendar-o" /> Calendário</a>
                  <a href="#" className="dropdown-item"><i className="fa fa-sliders" /> Configurações</a>
                  <div className="divider dropdown-divider" />
                  <a href="#" className="dropdown-item"><i className="material-icons"></i> Logout</a>
                </div>
              </div>
            </div>
          </div>
        </nav>	
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
        {/* Edit Modal HTML */}
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
        {/* Edit Modal HTML */}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">						
                  <h4 className="modal-title">Editar Demanda</h4>
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
                  <input type="submit" className="btn btn-info" defaultValue="Salvar" />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Delete Modal HTML */}
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
      </div>
    );
  }
}

export default App;
