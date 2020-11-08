import { Databases } from "../models/Databases";
import { User } from "../models/User";

export interface ContextType {
    databases: Databases[];
    create(name: string, email: string): Promise<User>;
    readAll(): Promise<User[]>;
    update(obj: User): Promise<User>;
    remove(userId: string): Promise<boolean>;
    alterDatabase(databaseName: string): void;
    bindDropDown(databaseName: string) : void;
    updateForm: any;
    cleanUpdateFormFields(): void;
    setDeleteForm: any;
    deleteForm: any;
    rebindDropdown: any;
    setUpdateForm: any;
}