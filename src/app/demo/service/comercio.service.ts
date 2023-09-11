import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Comercio} from "../api/comercio";

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  private url : string = `${environment.HOST}/comercios`

  constructor(
      private http:HttpClient
  ) { }

  Comercios(){
    return this.http.get<Comercio[]>(this.url)
  }

  registrarComercio(comercio : Comercio){
    return this.http.post(this.url, comercio);
  }

  totalComercios(){
    return this.http.get(`${this.url}/totalComercios`)
  }

  totalComercios24(){
    return this.http.get(`${this.url}/totalComercios24`)
  }

}
