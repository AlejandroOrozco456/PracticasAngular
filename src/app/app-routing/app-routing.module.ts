import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { InformacionComponent } from '../components/informacion/informacion.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { SongComponent } from '../components/song/song.component';
import { AgendaComponent } from '../components/agenda/agenda.component';
import { ListadoComponent } from '../components/listado/listado.component';

const routes : Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'informacion',
    component:InformacionComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'song',
    component:SongComponent
  },
  {
    path:'agenda',
    component:AgendaComponent
  },
  {
    path:'mensajes',
    component:ListadoComponent
  }

]



@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
