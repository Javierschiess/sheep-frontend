import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {LoginComponent} from "./demo/components/auth/login/login.component";
import {FormLayoutDemoComponent} from "./demo/components/uikit/formlayout/formlayoutdemo.component";
import {RegistrarComponent} from "./demo/components/auth/registrar/registrar.component";
import {GuardService} from "./demo/service/guard.service";
import {ComercioComponent} from "./demo/components/auth/comercio/comercio.component";
import {ClienteComponent} from "./demo/components/auth/cliente/cliente.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: LoginComponent},
            { path: 'registrar', component: RegistrarComponent },
            { path: 'cliente', component: ClienteComponent},
            { path: 'comercio', component: ComercioComponent},


            {
            path: 'home', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[GuardService]},
                    { path: 'uikit',loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule), canActivate:[GuardService] },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule), canActivate:[GuardService] },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule), /*canActivate:[GuardService]*/ },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule), canActivate:[GuardService] },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule), canActivate:[GuardService]}
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent},
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
