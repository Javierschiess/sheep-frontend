import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';
import {environment} from "../../../environments/environment";
import {dA} from "@fullcalendar/core/internal-common";

@Injectable()
export class ProductService {

    private url: string = `${environment.HOST}/productos`

    constructor(private http: HttpClient) { }

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
}
