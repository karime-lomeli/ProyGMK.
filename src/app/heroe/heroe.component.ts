import { Component, OnInit, Input } from '@angular/core';
import { HeroeService, Heroe } from './../shared/heroe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']


})
export class HeroeComponent implements OnInit {

  @Input() heroe: Heroe; //atributo para comunicacion componente padre a hijo

  //configurar e los parametros delconstructor el uso del servicio y del router

  constructor(public servicio: HeroeService, public ActivatedRoute: ActivatedRoute) {
    /*subscripcion a un observable que esta al pendiente de recibir por url el
    indice del super heroe que nos interesa */
    this.ActivatedRoute.params.subscribe(params => { 
      this.heroe = this.servicio.getHeroe(params['id']);
    });
   }

  ngOnInit(): void {
  }

}
