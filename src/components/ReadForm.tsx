import React from 'react';

const ReadForm = (props: any) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">READ</div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <button type="button" className="btn btn-primary" onClick={props.click}>Enviar</button>
                        </div>
                        <hr />
                        <div className="row">
                            <div id="">
                                *aqui renderiza resultado de 'Read'*
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadForm;