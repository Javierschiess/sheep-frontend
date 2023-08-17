import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {GuardService} from "../../service/guard.service";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
