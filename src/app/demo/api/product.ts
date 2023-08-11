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
    description?: string;
    descripcion?: string;
    price?: number;
    precio?: number;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    category?: string;
    image?: string;
    foto?:string;
    rating?: number;
}
