import React from 'react';
import Context from '../../contexts/Context';
import { initializePAAS } from '../../services/simpleCrudService';
import CreateForm from '../CreateForm';
import DatabaseRadio from '../DatabaseRadio';
import DeleteForm from '../DeleteForm';
import Footer from '../Footer';
import ReadForm from '../ReadForm';
import UpdateForm from '../UpdateForm';

import './App.css';

const App = () => {

  const handleInfo = () => {
    alert('A idéia aqui foi criar um exemplo de crud simples porém funcional. Utilizando ReactJS no frontend e .Net core no backend, trabalhando em dois bancos de dados distintos (MSSQL e MongoDB). [apenas para testes/exemplos/estudos gerais etc]. :) ');
  }

  // esse item serve apenas para inicializar as instâncias PAAS de banco de dados
  // no momento em que a aplicação inicializa (apenas para evitar um certo "delay" p/ 
  // inicializar durante a primeira utilização do sistema)  
  const initialize = async () => {
    try { await initializePAAS("mssql"); } catch (error) { }
    try { await initializePAAS("mongo"); } catch (error) { }    
  }

  // eslint-disable-next-line no-lone-blocks
  { initialize(); }

  return (
    <Context>
      <div className="container">
        <div>
          <div style={{ textAlign: "center" }}>
            <hr />
            <h2>Exemplos simples de CRUD</h2>
            <h6>Utilizando dois bancos de dados no backend (MSSQL e MongoDB) </h6>
            <hr />
          </div>
          <div style={{ textAlign: "right" }}>
            <button type="button" className="btn button-transparent animate__animated animate__pulse animate__infinite" onClick={handleInfo}>
              <div style={{ color: "dodgerblue" }}><i className="fa fa-info-circle fa-lg"></i></div>
              
            </button>
          </div>
          <DatabaseRadio />
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <CreateForm />
          </div>
          <div className="col-md-3">
            <ReadForm />
          </div>
          <div className="col-md-3">
            <UpdateForm />
          </div>
          <div className="col-md-3">
            <DeleteForm />
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </Context>
  );
}

export default App;
