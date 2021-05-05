import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { HeroeService, Heroe } from '../shared/heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]; //array del tipo de Heroe

  //habilitar el uso del servicio y el router en los parametros del constructor
  constructor(public servicio: HeroeService, public router: Router) { }

  ngOnInit(): void {
    this.heroes = this.servicio.getHeroes();
  }

}
