import React, { useContext } from 'react';
import { Context } from '../contexts/Context';
import { ContextType } from '../contexts/ContextType';

const DeleteForm = () => {

    const { remove, databases, deleteForm, setDeleteForm, rebindDropdown } = useContext<ContextType>(Context);

    const handleDelete = async () => {
        let ddlElement = { ...deleteForm };
        const result = await remove(ddlElement.key) as boolean;

        if (result) {
            alert('Elemento removido!');
            rebindDropdown();
        }
    }

    const handleDdlOptionChange = (event: any) => {
        let obj = { ...deleteForm };

        const resultSet = databases?.find(e => e.selected === true)?.readResultSet;
        const objSelecionado = resultSet.find(b => b.key === event.target.value);

        obj = objSelecionado ? objSelecionado : { key: "", value: "", displayValue: "" };

        setDeleteForm(obj);
    }

    return (
        <div className="card">
            <div className="card-header"><b>DELETE</b></div>
            <div className="card-body">
                <div className="form-group">
                    <div className="container">
                        {/* <label>Selecione:</label> */}
                        {/* aqui popula todos os itens existentes dentro do dropdown para escolha */}
                        <select className="form-control" value={deleteForm.key}
                            //className={inputClasses.join(' ')}
                            onChange={(event: any) => handleDdlOptionChange(event)}
                        >
                            <option value=''>Selecione...</option>
                            {
                                databases?.find(e => e.selected === true) ?
                                    databases?.find(e => e.selected === true).readResultSet.map(option => (
                                        <option key={option.key} value={option.key}>
                                            {option.displayValue}
                                        </option>)
                                    )
                                    : null
                            }
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="button" className="btn btn-primary" onClick={handleDelete} disabled={databases?.find(e => e.selected === true) ? false : true}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteForm;