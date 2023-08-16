import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = `${environment.UAA_HOST}/realms/sheep/protocol/openid-connect/token`
  constructor(
      private http: HttpClient,
      private router: Router
  ) { }

  login(usuario: string, contraseña: string){
    const body = `client_id=sheep-frontend&grant_type=password&username=${usuario}&password=${contraseña}`

    return this.http.post<any>(this.url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UT8')
    });

  }
}
