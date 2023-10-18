import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Imagen} from "../api/imagen";

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private url : string = `${environment.HOST}/cloudinary`;

  constructor(private http : HttpClient) { }

  public list(): Observable<Imagen[]>{
    return this.http.get<Imagen[]>(`${this.url}/${'list'}`)
  }

  public upload(imagen: File): Observable<any>{
    const formData = new FormData();
    formData.append('multipartFile', imagen );
    return this.http.post(`${this.url}/${'upload'}`, formData);
  }


}
