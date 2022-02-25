import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Api } from 'src/app/interface/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {
  formulario = this.formBuilder.group({
    marca:'',
    modelo:'',
    nombre:'',
    tipo:'',
  });
  tok:string="";
  instrumentos : Api[]=[];

  constructor(private formBuilder: FormBuilder, private ApiService:ApiService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.ApiService.getInstrument().subscribe((res:any)=>{
      this.instrumentos = res;
      console.log(this.instrumentos)
   })
  }
  onSubmit(){
    let nuevoIns : Api = {
      marca:this.formulario.get('marca')?.value,
      modelo:this.formulario.get('modelo')?.value,
      nombre :this.formulario.get('nombre')?.value,
      tipo:this.formulario.get('tipo')?.value,
      token:this.tok
          
  }
  this.ApiService.newInstrument(nuevoIns).subscribe((res:any)=>{
    console.log(res);
  })
  this.limpiarForm();
  this.cargarDatos();
}
limpiarForm(){
  this.formulario.reset()
}
}
