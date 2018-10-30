import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre;
  title = 'Ejemplo 1';
  AngularLogo = 'assets/angular.png'

  setName(nombre:string){
    this.nombre=nombre;
  }

  elems = [
    { desc: 'Home', check: true },
    { desc: 'About', check: true }
    ]
    
}
