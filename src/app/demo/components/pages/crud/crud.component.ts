import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';
import {switchMap} from "rxjs";
import {LoginService} from "../../../service/login.service";
import {Comercio} from "../../../api/comercio";
import {CategoriaService} from "../../../service/categoria.service";
import {an} from "@fullcalendar/core/internal-common";
import {Categoria} from "../../../api/categoria";

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService]
})
export class CrudComponent implements OnInit {

    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: Product[] = [];

    product: Product = {};

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    categorias: any[] = [];

    selectedCategoria: string;

    constructor(private productService: ProductService,
                private messageService: MessageService,
                private loginService : LoginService,
                private categoriaService : CategoriaService) { }


    ngOnInit() {
        this.productService.productosPorComercio(this.loginService.userId).subscribe(data => this.products = data);
        this.productService.getProductCambio().subscribe(data => this.productService.productos())
        this.categoriaService.categorias().subscribe(data => this.categorias = data);
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(producto: Product) {
        //this.productService.eliminarProductos(producto.idProducto).subscribe(data => data);
        this.deleteProductDialog = true;
        this.product = { ...producto };
    }

    /*confirmDeleteSelected(producto : Product) {
        this.productService.eliminarProductos(producto.idProducto).subscribe(data => data);
        this.deleteProductsDialog = false;
        //this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Producto eliminado', life: 3000 });
        //this.selectedProducts = [];
    }*/

    confirmDelete(producto : Product) {
        this.productService.eliminarProductos(producto.idProducto).pipe(switchMap(() => {
            return this.productService.productosPorComercio(this.loginService.userId)
        })).subscribe(data => this.products = data);
        this.deleteProductDialog = false;
        this.products = this.products.filter(val => val.idProducto !== this.product.idProducto);
        this.messageService.add({ severity: 'error', summary: 'Eliminado', detail: 'Producto eliminado', life: 3000 });

    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

   saveProduct() {
        this.submitted = true;
        if (this.product.nombre?.trim()) {
            if (this.product.idProducto != null) {
                //@ts-ignore
                let comercio = new Comercio();
                comercio.idComercio = this.loginService.userId
                this.product.comercio = comercio;
                this.productService.modificarProductos(this.product).pipe(switchMap(() => {
                    return this.productService.productosPorComercio(this.loginService.userId)
                })).subscribe(data => {
                    this.products = data;
                });
                this.messageService.add({ severity: 'info', summary: 'Modificado', detail: 'Producto modificado', life: 3000 });
            } else {
                let comercio = new Comercio();
                comercio.idComercio = this.loginService.userId
                this.product.comercio = comercio;
                this.product.categoria = this.selectedCategoria;
                this.productService.registrar(this.product).pipe(switchMap(() => {
                    return this.productService.productosPorComercio(this.loginService.userId)
                })).subscribe(data => this.products = data);
                this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Producto creado', life: 3000 });

            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }



    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

}
