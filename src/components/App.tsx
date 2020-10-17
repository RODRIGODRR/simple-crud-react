import React from 'react';
import CreateForm from './CreateForm';
import DeleteForm from './DeleteForm';
import ReadForm from './ReadForm';
import UpdateForm from './UpdateForm';

const App = () => {

  const handleCreate = () => {
    alert('Create acionado!');
  }

  const handleRead = () => {
    alert('Read acionado!');
  }

  const handleUpdate = () => {
    alert('Update acionado!');
  }

  const handleDelete = () => {
    alert('Delete acionado!');
  }

  const handleInfo = () => {
    alert('A idéia aqui seria criar um exemplo de crud bem simples porém funcional. Utilizando react no frontend e .net core no backend... [apenas para testes/exemplos/estudos]');
  }

  return (
    <div>
      <div className="container">
        <div>
          <div style={{ textAlign: "center" }}>
            <hr />
            <h2>Exemplos simples de crud:</h2>
            <hr />
          </div>
          <div style={{ textAlign: "right" }}>
            <button type="button" className="btn button-transparent" onClick={handleInfo}>
              <i className="fa fa-info-circle fa-lg">
              </i>
            </button>
          </div>
          <div>
            <label htmlFor="">Escolha o banco de dados (nuvem):</label>
            <br />
            <label className="radio-inline p-3"><input type="radio" name="optradio" />MSSQL</label>
            <label className="radio-inline"><input type="radio" name="optradio" />MongoDB</label>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <CreateForm click={handleCreate} />
          </div>
          <div className="col-md-3">
            <ReadForm click={handleRead} />
          </div>
          <div className="col-md-3">
            <UpdateForm click={handleUpdate} />
          </div>
          <div className="col-md-3">
            <DeleteForm click={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
