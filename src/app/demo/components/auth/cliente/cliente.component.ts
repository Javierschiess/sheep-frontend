import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../../api/cliente";
import {ClienteService} from "../../../service/cliente.service";
import {DepartamentosService} from "../../../service/departamentos.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  providers: [MessageService]
})
export class ClienteComponent implements OnInit{

  selectedCity: string;

  cliente: Cliente = {};

  departamentos: any[] = [];

  constructor(
      private clienteService : ClienteService,
      private messageService : MessageService,
      private departamentoService : DepartamentosService,
      ){}

  ngOnInit(): void {
    this.departamentoService.departamentos().subscribe(data => this.departamentos = data)
  }

  registrarse(){
    this.cliente.municipio= this.selectedCity;
    this.clienteService.registrarClientes(this.cliente).subscribe(data => this.cliente = data);
    this.messageService.add({severity: 'error', summary: 'Registrado', detail:'Registrado Corrrectamente', life: 3000});
  }

}
