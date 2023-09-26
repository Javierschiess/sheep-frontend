import {Municipio} from "./municipio";
import {Comercio} from "./comercio";
import {Categoria} from "./categoria";
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
    foto?: string;
    estado?: Estado;
    categoria?: Categoria;
    comercio?: Comercio;
    municipio?: Municipio;
    rating?: number;
}
