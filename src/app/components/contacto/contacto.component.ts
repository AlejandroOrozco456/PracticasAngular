import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formulario = this.formBuilder.group({
    nombre:'',
    email:'',
    asunto:'',
    descripcion:'',
  });
  usuarios : Usuario[]=[];

  constructor(private formBuilder: FormBuilder, private UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    let nuevoUser : Usuario = {
      nombre :this.formulario.get('nombre')?.value,
      email:this.formulario.get('email')?.value,
      asunto:this.formulario.get('asunto')?.value,
      descripcion:this.formulario.get('descripcion')?.value, 
  }

  this.UsuarioService.addUser(nuevoUser);
  this.usuarios=this.UsuarioService.getAll();
    this.limpiarForm();
  }
  limpiarForm(){
    this.formulario.reset()
}

}
