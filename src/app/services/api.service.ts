import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  uri:string="http://localhost:5000/instrumentos"

  constructor(private http:HttpClient) { }

  getInstrument(){
    return this.http.get(this.uri);
  }

  newInstrument(instr:any){
    return this.http.post(this.uri,instr);
  }
}
