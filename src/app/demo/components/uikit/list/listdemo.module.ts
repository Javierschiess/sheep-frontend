import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListDemoComponent } from './listdemo.component';
import { ListDemoRoutingModule } from './listdemo-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import {CascadeSelectModule} from "primeng/cascadeselect";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ListDemoRoutingModule,
        DataViewModule,
        PickListModule,
        OrderListModule,
        InputTextModule,
        DropdownModule,
        RatingModule,
        ButtonModule,
        NgOptimizedImage,
        CascadeSelectModule
    ],
	declarations: [ListDemoComponent]
})
export class ListDemoModule { }
