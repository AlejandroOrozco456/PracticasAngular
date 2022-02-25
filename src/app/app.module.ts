import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongComponent } from './components/song/song.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ListadoComponent } from './components/listado/listado.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    FooterComponent,
    HomeComponent,
    InformacionComponent,
    ContactoComponent,
    SongComponent,
    AgendaComponent,
    ListadoComponent,
    InstrumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
