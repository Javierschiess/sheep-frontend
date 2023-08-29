import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../../api/cliente";
import {ClienteService} from "../../../service/cliente.service";
import {an} from "@fullcalendar/core/internal-common";
import {DepartamentosService} from "../../../service/departamentos.service";
import {Departamento} from "../../../api/departamento";
import {Municipio} from "../../../api/municipio";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent implements OnInit{

  selectedCity: string;

  cliente: Cliente = {};

  departamentos: any[] = [];

  constructor(
      private clienteService : ClienteService,
      private departamentoService : DepartamentosService){}

  ngOnInit(): void {
    this.departamentoService.departamentos().subscribe(data => this.departamentos = data)


  }


  registrarse(){

    this.cliente.municipio= this.selectedCity;
    this.clienteService.registrarClientes(this.cliente).subscribe(data => this.cliente = data);
  }

}
