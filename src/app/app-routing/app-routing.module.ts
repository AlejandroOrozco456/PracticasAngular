import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactoComponent } from '../components/contacto/contacto.component';

const routes : Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contacto',
    component:HomeComponent
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
