import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import {JwtModule} from "@auth0/angular-jwt";
import {environment} from "../environments/environment";
import { RegistrarComponent } from './demo/components/auth/registrar/registrar.component';
import { ComercioComponent } from './demo/components/auth/comercio/comercio.component';
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {PasswordModule} from "primeng/password";
import {RadioButtonModule} from "primeng/radiobutton";
import {RippleModule} from "primeng/ripple";
import { ClienteComponent } from './demo/components/auth/cliente/cliente.component';
import {CascadeSelectModule} from "primeng/cascadeselect";

export function tokenGetter(){
    return sessionStorage.getItem(environment.TOKEN_NAME);
}

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, RegistrarComponent, ComercioComponent, ClienteComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: [environment.HOST.substring(7)],
                //disallowedRoutes: [`${environment.HOST}/`]
            }
        }),
        InputTextModule,
        PaginatorModule,
        ButtonModule,
        CheckboxModule,
        PasswordModule,
        RadioButtonModule,
        RippleModule,
        CascadeSelectModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
