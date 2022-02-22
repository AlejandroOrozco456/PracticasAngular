import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/interface/usuario';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    let nuevoUser : Usuario = {
      nombre :this.formulario.get('nombre')?.value,
      email:this.formulario.get('email')?.value,
      asunto:this.formulario.get('asunto')?.value,
      descripcion:this.formulario.get('descripcion')?.value, 
  }

  this.usuarios.push(nuevoUser);
  console.log(this.usuarios)
    this.limpiarForm();
  }
  limpiarForm(){
    this.formulario.reset()
}

}
