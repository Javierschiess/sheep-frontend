import {Municipio} from "./municipio";
import {Comercio} from "./comercio";
import {Categoria} from "./categoria";

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
    foto?: string;
    estado?: string;
    categoria?: string;
    comercio?: Comercio;
    municipio?: Municipio;
    rating?: number;
}
