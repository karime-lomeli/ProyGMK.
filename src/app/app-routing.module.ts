import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';

import { HeroeComponent } from './heroe/heroe.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { VideoComponent } from './video/video.component';
import { PeliculasComponent } from './peliculas/peliculas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'buscador/:nombre', component: BuscadorComponent},
  {path: 'video', component: VideoComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
