import {Component, OnInit} from '@angular/core';
import {ComercioService} from "../../../service/comercio.service";
import {Comercio} from "../../../api/comercio";
import {DepartamentosService} from "../../../service/departamentos.service";
import {Municipio} from "../../../api/municipio";
@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
})
export class ComercioComponent implements OnInit{

    selectedCity: string;


    comercio: Comercio = {};

    departamentos : any[] = [];

   constructor(private comercioService : ComercioService,
               private departamentoService : DepartamentosService) {}
    ngOnInit(): void {
       this.departamentoService.departamentos().subscribe(data => this.departamentos = data)

    }

    registrarse(){
       this.comercio.municipio = this.selectedCity;
       this.comercioService.registrarComercio(this.comercio).subscribe(data =>
       this.comercio = data);
       console.log(this.selectedCity)

    }

}
