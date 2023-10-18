import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = `${environment.UAA_HOST}/realms/sheep/protocol/openid-connect/token`
  userId: string;

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

  estaLogueado(){
    const token = sessionStorage.getItem(environment.TOKEN_NAME);
    this.extractUserIDFromToken(token);
    return token != null;
  }

  cerraSesion() {
    sessionStorage.clear();
    this.router.navigate([''])
  }

  extractUserIDFromToken(token : string){
    if (token){
      const base64Url: string = token.split('.')[1];
      const base64: string = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decadeToken : any = JSON.parse(window.atob(base64));
      this.userId = decadeToken.sub;
    }
  }
}
