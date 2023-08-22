import {Municipio} from "./municipio";
import {Comercio} from "./comercio";

interface InventoryStatus {
    label: string;
    value: string;
}

export class Product {
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
    comercio ?: Comercio;
    municipio?: Municipio;
    rating?: number;
    idUser?: string;
    //description?: string;
    //price?: number;
    //quantity?: number;
    //category?: string;
    //image?: string;
}
