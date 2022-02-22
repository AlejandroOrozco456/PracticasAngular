import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios:Usuario[]=[];

  constructor() { }

  getAll(){
    return this.usuarios;
  }
  getFirstEnd(){
    return this.usuarios[0];
  }
  getEnd(){
    return this.usuarios[this.usuarios.length-1];
  }
  addUser(user:Usuario){
    this.usuarios.push(user);
    console.log(this.usuarios);
  }

}
