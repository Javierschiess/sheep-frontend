import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../api/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private url : string = `${environment.HOST}/clientes`;

  constructor(private http : HttpClient) { }

  registrarClientes (cliente : Cliente){
    return this.http.post(this.url, cliente)
  }

}