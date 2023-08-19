import {Component, OnInit} from '@angular/core';
import {ComercioService} from "../../service/comercio.service";
import {Comercio} from "../../api/comercio";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
})
export class ComercioComponent implements OnInit{

    comercio: Comercio = {};

   constructor(private comercioService : ComercioService) {
   }
    ngOnInit(): void {

    }

    registrarse(){
       this.comercioService.registrarComercio(this.comercio).subscribe(data =>
       console.log(data));

    }

}
