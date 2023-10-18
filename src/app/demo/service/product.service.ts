import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';
import {environment} from "../../../environments/environment";
import {interval, startWith, Subject, switchMap} from "rxjs";
import {LoginService} from "./login.service";
import {Municipio} from "../api/municipio";

@Injectable()
export class ProductService {

    url: string = `${environment.HOST}/productos`
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

    productos(){
        return this.http.get<Product[]>(this.url);
    }

    registrar(product : Product, imagen : File){
        const formData = new FormData();
        formData.append('nombre', product.nombre);
        formData.append('descripcion', product.descripcion);
        formData.append('precio', "6");
        formData.append('multipartFile', imagen, imagen.name);
        formData.append('categoria', product.categoria.idCategoria);
        formData.append('comercio', product.comercio.idComercio);
        formData.append('estado', product.estado.idEstado);
        formData.append('rating', "3");
        return this.http.post(this.url, formData);
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

    productosPorMunicipio(idCliente : string, idMunicipio : string){
        let params = new HttpParams();

            params = params.set('idCliente', idCliente);
            params = params.set('idMunicipio', idMunicipio);

        const url = `${environment.HOST}/productos/buscarPorMunicipio`
        return this.http.get<Product[]>(url, {params: params});
    }

    totalProductos(){
        return interval(5000).pipe(
            startWith(0),
            switchMap(() => this.http.get(`${environment.HOST}/productos/totalProductos`))
        );

    }

    totalProductos24(){
        return interval(5000)
            .pipe(
                startWith(0),
                switchMap(() => this.http.get(`${environment.HOST}/productos/totalProductos24`))
            )

    };
}
