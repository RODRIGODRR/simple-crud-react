import React, { useContext } from 'react';
import { Context } from '../contexts/Context';
import { ContextType } from '../contexts/ContextType';

const DatabaseRadio = () => {

    const { databases, alterDatabase } = useContext<ContextType>(Context);

    const handleDatabaseSelected = (event: any) => {
        alterDatabase(event.target.name);        
    }

    return (
        <div>
            <h5>Escolha o banco de dados:</h5>
            <label className="radio-inline p-3"><input type="radio" name="mssql" 
            checked={databases.find(e => e.name === "mssql")?.selected} onChange={(event) => handleDatabaseSelected(event)} />MSSQL</label>
            <label className="radio-inline"><input type="radio" name="mongo" 
            checked={databases.find(e => e.name === "mongo")?.selected} onChange={(event) => handleDatabaseSelected(event)} />MongoDB</label>
        </div>
    );
}

export default DatabaseRadio;