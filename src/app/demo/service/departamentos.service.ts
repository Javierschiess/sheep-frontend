import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Departamento} from "../api/departamento";

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private url : string = `${environment.HOST}/departamentos`

  constructor(private http : HttpClient) { }


  departamentos(){
    return this.http.get<Departamento[]>(this.url);
  }

}
