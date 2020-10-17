import React from 'react';

const UpdateForm = (props: any) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">UPDATE</div>
                <div className="card-body">
                    <div className="form-group">
                        <div className="container">
                            <label>Selecione:</label>
                            {/* aqui popula todos os itens existentes dentro do dropdown para escolha */}
                            <select className="form-control" name="" id=""></select>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="name">Nome: </label>
                                <input type="text" className="form-control" />
                                <label htmlFor="name">E-mail: </label>
                                <input type="email" className="form-control" />
                                <br />
                                <button type="button" className="btn btn-primary" onClick={props.click}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateForm;