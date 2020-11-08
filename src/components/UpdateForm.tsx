import React, { useContext } from 'react';
import { Context } from '../contexts/Context';
import { ContextType } from '../contexts/ContextType';
import { User } from '../models/User';

const UpdateForm = () => {

    const { update, databases, updateForm, setUpdateForm, rebindDropdown } = useContext<ContextType>(Context);    
    
    const handleUpdate = async () => {
        let obj = {...updateForm};        
        let user: User = {id: obj.ddlUserSelected.key, name: obj.txtNome, email: obj.txtEmail};

        const result = await update(user) as User;

        if(result){
            alert('Elemento atualizado!');
            rebindDropdown();
        }
    }

    const handleDdlOptionChange = (event:any) => {
        let obj = {...updateForm};

        const resultSet = databases?.find(e => e.selected === true)?.readResultSet;
        const objSelecionado = resultSet.find(b => b.key === event.target.value);
        
        obj.ddlUserSelected = objSelecionado ?? "";
        obj.txtNome = objSelecionado?.displayValue ?? "";
        obj.txtEmail = objSelecionado?.email ?? "";
        
        setUpdateForm(obj);
    }

    const handleTextInputChange = (event:any) => {
        let obj = {...updateForm};
        
        switch(event.target.name){
            case "nome":
                obj.txtNome = event.target.value;
                break;
            case "email":
                obj.txtEmail = event.target.value;
                break;
            default:
                break;
        }  

        setUpdateForm(obj);
    }

    return (
        <div>
            <div className="card">
                <div className="card-header"><b>UPDATE</b></div>
                <div className="card-body">
                    <div className="form-group">
                        <div className="container">
                            {/* <label>Selecione:</label> */}
                            {/* aqui popula todos os itens existentes dentro do dropdown para escolha */}
                            
                            <select className="form-control" value={updateForm.ddlUserSelected.key}
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

                            <div className="form-group">
                                <label htmlFor="name">Nome: </label>
                                <input type="text" name="nome" className="form-control" placeholder="informe o nome" value={updateForm.txtNome} onChange={(event: any) => handleTextInputChange(event)} />
                                <label htmlFor="name">E-mail: </label>
                                <input type="email" name="email" className="form-control" placeholder="informe o e-mail" value={updateForm.txtEmail} onChange={(event: any) => handleTextInputChange(event)} />
                                <br />
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary" onClick={handleUpdate} disabled={databases?.find(e => e.selected === true) ? false : true}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateForm;