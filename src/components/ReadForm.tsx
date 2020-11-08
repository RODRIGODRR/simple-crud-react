import React, { useContext, useState } from 'react';
import { Context } from '../contexts/Context';
import { ContextType } from '../contexts/ContextType';

const ReadForm = () => {

    const [readButtonOnOff, setReadButtonOnOff] = useState("btn btn-primary");
    const [resetButtonOnOff, setResetButtonOnOff] = useState("d-none");
    const [readResultSet, setReadResultSet] = useState<string>("-Aqui renderiza o resultado. Formato: [JSON.stringify]");

    const { readAll, databases } = useContext<ContextType>(Context);

    const handleRead = async () => {        
        const result = await readAll();

        setReadButtonOnOff("d-none");
        setResetButtonOnOff("btn btn-secondary");
        setReadResultSet(JSON.stringify(result));
    }

    const resetRead = () => setReadResultSet("-Aqui renderiza o resultado. Formato: [JSON.stringify]");

    const handleReset = () => {
        resetRead();
        setResetButtonOnOff("d-none");
        setReadButtonOnOff("btn btn-primary");
    }

    return (
        <div>
            <div className="card">
                <div className="card-header"><b>READ</b></div>
                <div className="card-body">
                    <div className="container">
                        <div className="text-center">
                            <button type="button" className={readButtonOnOff} onClick={handleRead} disabled={databases?.find(e => e.selected === true) ? false : true}>Enviar</button>
                            <button type="button" className={resetButtonOnOff} onClick={handleReset}>Resetar</button>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <span>{readResultSet}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadForm;