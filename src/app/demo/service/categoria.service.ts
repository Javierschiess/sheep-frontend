import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Categoria} from "../api/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url : string = `${environment.HOST}/categorias`;

  constructor(private http : HttpClient) { }

  categorias() {
    return this.http.get<Categoria[]>(this.url);
  }
}
