import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nom :String = new String("Alejandro Gracía Orozco");
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
