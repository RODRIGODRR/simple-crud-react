import React, { createContext, useState } from 'react';
import { Databases } from '../models/Databases';
import { User } from '../models/User';
import { get, post, del, put } from '../services/simpleCrudService';
import { ContextType } from './ContextType';

export const Context = createContext<ContextType>({
    databases: [],
    deleteForm: {},
    rebindDropdown: {},
    updateForm: {},
    setUpdateForm: {},
    setDeleteForm: {},
    create: (name: string, email: string): Promise<User> => { return null; },
    readAll: (): Promise<User[]> => { return null; },    
    update: (obj: User): Promise<User> => { return null; },
    remove: (userId: string): Promise<boolean> => { return null; },
    alterDatabase: (databaseName: string) => { },
    bindDropDown: () => { },
    cleanUpdateFormFields: () => { }
});

const Provider = (props: any) => {

    // fonte de dados principal (obtido quando o banco de dados é escolhido)
    const [databases, setDatabases] = useState<Databases[]>([
        { name: "mssql", selected: false, readResultSet: [] },
        { name: "mongo", selected: false, readResultSet: [] }
    ]);

    // trabalha com card 'delete'
    const [deleteForm, setDeleteForm] = useState({ key: "", value: "", displayValue: "" });
    
    // trabalha com card 'upload'
    const [updateForm, setUpdateForm] = 
        useState({ ddlUserSelected: { key: "", value: "", displayValue: "", email: "" }, txtNome: "", txtEmail: ""  });

    const create = async (name: string, email: string): Promise<User> => {
        const user: User = new User(null, name, email);
        return await post(databases?.find(e => e.selected === true).name, user);
    }

    const readAll = async (): Promise<User[]> => {
        return await get(databases?.find(e => e.selected === true).name) as User[];
    }

    const update = async (user: User): Promise<User> => {         
        return await put(databases?.find(e => e.selected === true).name, user) as User;
     }
    
    const remove = async (userId: string): Promise<boolean> => {         
        return await del(databases?.find(e => e.selected === true).name, userId) as boolean;        
     }

    const alterDatabase = async (databaseName: string) => {
        let databasesAux = [...databases];
        let databaseMssql = databasesAux.find(e => e.name === "mssql");
        let databaseMongo = databasesAux.find(e => e.name === "mongo");

        // popula os dropdowns de acordo com a escolha do banco de dados
        switch (databaseName) {
            case "mssql":
                databaseMssql.selected = !databaseMssql.selected;
                databaseMongo.selected = false;
                databaseMssql.readResultSet = await bindDropDown("mssql");
                break;
            case "mongo":
                databaseMssql.selected = false;
                databaseMongo.selected = !databaseMongo.selected;
                databaseMongo.readResultSet = await bindDropDown("mongo");
                break;
            default:
                break;
        }

        setDatabases(databasesAux);
        
        cleanUpdateFormFields();
    }

    const rebindDropdown = async () => {
        const databasesAux = [...databases];
        const databaseNameSelected = databases?.find(e => e.selected === true).name;
        const objDatabase = databasesAux.find(e => e.name === databaseNameSelected);

        switch (databaseNameSelected) {
            case "mssql":
                objDatabase.readResultSet = await bindDropDown("mssql");
                break;
            case "mongo":
                objDatabase.readResultSet = await bindDropDown("mongo");
                break;
            default:
                break;
        }

        setDatabases(databasesAux);
    }

    const bindDropDown = async (databaseName: string) => {
        const result = await get(databaseName) as User[];

        let list: Array<object> = [];

        result.forEach(e => {
            list.push({ key: e.id, value: e.id, displayValue: e.name, email: e.email });
        });

        return list;
    }

    const cleanUpdateFormFields = () => {
        let obj = { ...updateForm };
        
        obj.txtNome = "";
        obj.txtEmail = "";
        obj.ddlUserSelected = { key: "", value: "", displayValue: "", email: "" };        

        setUpdateForm(obj);
    }    

    return (
        <Context.Provider value={
            { databases, create, readAll, update, remove, alterDatabase, bindDropDown, updateForm, cleanUpdateFormFields, setUpdateForm, deleteForm, setDeleteForm, rebindDropdown }
        }>
            {props.children}
        </Context.Provider>
    );
}

export default Provider;