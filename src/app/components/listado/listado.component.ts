import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mensajes:Usuario[]=[];
  primer:Usuario={} as Usuario;
  ultimo:Usuario={} as Usuario;
  firstEnd:Usuario[]=[];

  constructor(private UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.mensajes = this.UsuarioService.getAll();
    console.log(this.mensajes);
    this.primer =this.UsuarioService.getFirstEnd();
    this.ultimo=this.UsuarioService.getEnd();
    this.firstEnd.push(this.primer,this.ultimo);

  }

}
