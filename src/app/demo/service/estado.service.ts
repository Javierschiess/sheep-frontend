import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Estado} from "../api/estado";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url : string = `${environment.HOST}/estados`

  constructor(private http : HttpClient) { }

  estados(){
    return this.http.get<Estado[]>(this.url);
  }


}
