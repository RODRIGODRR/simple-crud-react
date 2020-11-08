import React, { useContext, useState } from 'react';
import { Context } from '../contexts/Context';
import { ContextType } from '../contexts/ContextType';
import { User } from '../models/User';

const CreateForm = () => {
        
    const { databases, create, rebindDropdown } = useContext<ContextType>(Context);
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handleCreate = async () => {
        const result = await create(inputName, inputEmail) as User;

        if(result){
            alert('Cadastro realizado com sucesso! ' + JSON.stringify(result));
            
            // atualiza os campos do formulário
            setInputName("");
            setInputEmail("");
            
            // (atualiza os dropdowns da tela 'update' e 'delete' com a última versão)
            rebindDropdown();
        }
    }

    const handleInputText = (event:any) => {        
        switch(event.target.name){
            case "name":
                setInputName(event.target.value);       
                break;
            case "email":
                setInputEmail(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <div className="card">
                <div className="card-header"><b>CREATE</b></div>
                <div className="card-body">
                    <div className="form-group">
                        <div className="container">
                            <label htmlFor="name">Nome: </label>
                            <input type="text" name="name" className="form-control" placeholder="informe o nome" value={inputName} onChange={(event: any) => handleInputText(event)} />
                            <label htmlFor="name">E-mail: </label>
                            <input type="email" name="email" className="form-control" placeholder="informe o e-mail" value={inputEmail} onChange={(event: any) => handleInputText(event)} />
                            <br />
                            <div className="text-center">
                                <button type="button" className="btn btn-primary" onClick={handleCreate} disabled={databases?.find(e => e.selected === true) ? false : true}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateForm;