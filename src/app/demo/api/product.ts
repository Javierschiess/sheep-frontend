import {Comercio} from "./comercio";
import {Categoria} from "./categoria";
import {Municipio} from "./municipio";
import {Estado} from "./estado";

interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string;
    idProducto?:string;
    code?: string;
    name?: string;
    nombre?: string;
    descripcion?: string;
    precio?: number;
    inventoryStatus?: InventoryStatus;
    foto?:string;
    estado?:string;
    categoria?: string;
    comercio?: Comercio;
    municipio?: Municipio;
    rating?: number;
    //description?: string;
    //price?: number;
    //quantity?: number;
    //category?: string;
    //image?: string;
}
