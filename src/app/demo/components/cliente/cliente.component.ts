import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../api/cliente";
import {ClienteService} from "../../service/cliente.service";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{

  cliente: Cliente = {};

  constructor(
      private clienteService : ClienteService) {
  }

  ngOnInit(): void {
  }

  registrarse(){
    this.clienteService.registrarClientes(this.cliente).subscribe(data => console.log(data));

  }

}
