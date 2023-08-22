import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';
import {environment} from "../../../environments/environment";
import {Subject} from "rxjs";
import {LoginService} from "./login.service";

@Injectable()
export class ProductService {

    private url: string = `${environment.HOST}/productos`
    private idUser = this.loginService.userId;

    private productoCambio : Subject<Product[]> = new Subject<Product[]>();

    constructor(private http: HttpClient,
                private loginService : LoginService) { }

    getProductsSmall() {
        return this.http.get<any>(this.url)
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    /*getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }*/

    productos(){
        return this.http.get<Product[]>(this.url);
    }

    registrar(product : Product){
        return this.http.post(this.url, product);
    }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    eliminarProductos(idProducto : string){
       return this.http.delete(`${this.url}/${idProducto}`);
    }

    modificarProductos(producto : Product){
        return this.http.put(this.url, producto);
    }


    getProductCambio(){
        return this.productoCambio.asObservable();
    }

    setProductCambio(product : Product[]){
        this.productoCambio.next(product);
    }

    productosPorComercio(idcomercio :string){
        let params = new HttpParams();
        if (idcomercio != null){
            params = params.set('idComercio', idcomercio);
        }
        const url = `${environment.HOST}/productos/buscarPorComercio`;
        return this.http.get<Product[]>(url, {params})
    }
}
