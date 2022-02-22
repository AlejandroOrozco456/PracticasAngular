import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Agenda } from 'src/app/interface/agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  formulario = this.formBuilder.group({
    fechaH:'',
    paquete:'',
    lugar:'',
    horas:'',
  });
  contratos : Agenda []=[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let nuevocontrato : Agenda = {
      fechaH :this.formulario.get('fechaH')?.value,
      paquete:this.formulario.get('paquete')?.value,
      lugar:this.formulario.get('lugar')?.value,
      horas:this.formulario.get('horas')?.value, 
  }

  this.contratos.push(nuevocontrato);
  console.log(this.contratos)
    this.limpiarForm();
  }
  limpiarForm(){
    this.formulario.reset()
}

}
