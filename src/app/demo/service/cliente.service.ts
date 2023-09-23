import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Cliente} from "../api/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private url : string = `${environment.HOST}/clientes/registrar`;

  constructor(private http : HttpClient) { }

  registrarClientes (cliente : Cliente){
    return this.http.post(this.url, cliente)

  }

  totalClientes(){
    return this.http.get(`${environment.HOST}/clientes/totalClientes`);
  }

  totalClientes24(){
    return this.http.get(`${environment.HOST}/clientes/totalClientes24`)
  }

}
