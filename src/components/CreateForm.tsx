import React from 'react';

const CreateForm = (props: any) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">CREATE</div>
                <div className="card-body">
                    <div className="form-group">
                        <div className="container">
                            <label htmlFor="name">Nome: </label>
                            <input type="text" className="form-control" placeholder="informe o nome" />
                            <label htmlFor="name">E-mail: </label>
                            <input type="email" className="form-control" placeholder="informe o e-mail" />
                            <br />
                            <button type="button" className="btn btn-primary" onClick={props.click}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateForm;