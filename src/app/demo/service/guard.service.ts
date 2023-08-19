import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {LoginService} from "./login.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../../environments/environment";
import {el} from "@fullcalendar/core/internal-common";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(
      private loginService : LoginService,
      private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //Usuario logueado
    let rpta = this.loginService.estaLogueado();
    if (!rpta){
      this.loginService.cerraSesion();
      return false;
    }

    //Token vigente

    const helper =  new JwtHelperService();
    let token = sessionStorage.getItem(environment.TOKEN_NAME);
    if (!helper.isTokenExpired(token)){


      return true;
    }else {
      this.loginService.cerraSesion();
      return false;
    }



  }

}
