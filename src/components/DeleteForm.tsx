import React from 'react';

const DeleteForm = (props: any) => {
    return (
        <div className="card">
            <div className="card-header">DELETE</div>
            <div className="card-body">
                <div className="form-group">
                    <div className="container">
                        <label>Selecione:</label>
                        {/* aqui popula todos os itens existentes dentro do dropdown para escolha */}
                        <select className="form-control" name="" id=""></select>
                        <hr />
                        <button type="button" className="btn btn-primary" onClick={props.click}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteForm;