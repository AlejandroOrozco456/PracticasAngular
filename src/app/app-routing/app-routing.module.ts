import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { InformacionComponent } from '../components/informacion/informacion.component';
import { ContactoComponent } from '../components/contacto/contacto.component';

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
  }

]



@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
