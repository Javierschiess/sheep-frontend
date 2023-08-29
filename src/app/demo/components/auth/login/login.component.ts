import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {LoginService} from "../../../service/login.service";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    usuario: string;
    password!: string;

    constructor(public layoutService: LayoutService,
                private loginService : LoginService,
                private router: Router) { }

    iniciarSesion(){
        this.loginService.login(this.usuario, this.password).subscribe(data => {
            sessionStorage.setItem(environment.TOKEN_NAME, data.access_token);
            this.router.navigate(['/home/dashboard']);
        });
    }
}
