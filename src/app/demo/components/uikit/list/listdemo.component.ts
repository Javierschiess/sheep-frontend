import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {LoginService} from "../../../service/login.service";
import {Comercio} from "../../../api/comercio";
import {DepartamentosService} from "../../../service/departamentos.service";
import {Municipio} from "../../../api/municipio";

@Component({
    templateUrl: './listdemo.component.html'
})
export class ListDemoComponent implements OnInit {

    products: Product[] = [];

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    selectedCity: string = '';

    departamentos : any[] = [];

    constructor(private productService: ProductService,
                private loginService : LoginService,
                private departamentosService : DepartamentosService) { }

    ngOnInit() {
        //this.productService.productos().subscribe(data => this.products = data);
        this.valor();
        this.departamentosService.departamentos().subscribe(data => this.departamentos = data);
        this.sortOptions = [
            { label: 'Precio mas alto', value: '!precio' },
            { label: 'Precio mas bajo', value: 'precio' }
        ];



    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }

    valor(){
        //const test = JSON.stringify(this.selectedCity);
        this.productService.productosPorMunicipio(this.loginService.userId, this.selectedCity).subscribe(data => this.products = data);
    }


}
