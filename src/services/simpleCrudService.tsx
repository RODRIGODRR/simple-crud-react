import { User } from '../models/User';
import axios from '../axios';

export const initializePAAS = async (databaseName: string) => {    
    try {
        const response = await axios.get("v1/simpleCrud/initialize/" + databaseName);
        return response.data ? response.data as User : null;        
    } catch (error) {
        console.log(error);
    }
}

export const get = async (databaseName: string) => {    
    try {
        const response = await axios.get("v1/simpleCrud/" + databaseName);
        return response.data ? response.data as User[] : "dados não encontrados";        
    } catch (error) {
        console.log(error);
    }
}

export const post = async (databaseName: string, obj: User) => {
    try {
        const response = await axios.post("v1/simpleCrud/" + databaseName, obj);
        return response.data ? response.data as User : null;    
    } catch (error) {
        console.log(error);
    }
}

export const put = async (databaseName: string, obj: User) => {
    try {
        const response = await axios.put("v1/simpleCrud/" + databaseName + "/" + obj.id, obj);
        return response.data ? response.data as User : null;    
    } catch (error) {
        console.log(error);
    }
}

export const del = async (databaseName: string, userId: string) => {
    try {
        const response = await axios.delete("v1/simpleCrud/" + databaseName + '/' + userId);
        return response.data;    
    } catch (error) {
        console.log(error);
    }
}