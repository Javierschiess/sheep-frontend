import {Municipio} from "./municipio";
import {Comercio} from "./comercio";
import {Categoria} from "./categoria";
import {Estado} from "./estado";

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
    foto?: string;
    estado?: Estado;
    categoria?: Categoria = new Categoria();
    comercio?: Comercio;
    municipio?: Municipio;
    rating?: number;
}
