import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exa01-g1';
  constructor(private router: Router) {
  }
  agregarcurso() {
    this.router.navigate(["agregarcurso"])
  }
  listarcurso() {
    this.router.navigate(["listarcurso"])
  }
  editarcurso() {
    this.router.navigate(["editarcurso"])
  }
  agregaralumno(){
    this.router.navigate(["agregaralumno"])
  }
  listaralumno(){
    this.router.navigate(["listaralumno"])
  }
  editaralumno(){
    this.router.navigate(["editaralumno"])
  }

  agregarempleado(){
    this.router.navigate(["agregarempleado"])
  }
  listarempleado(){
    this.router.navigate(["listarempleado"])
  }
  editarempleado(){
    this.router.navigate(["editarempleado"])
  }

  agregarescuela(){
    this.router.navigate(["agregarescuela"])
  }
  listarescuela(){
    this.router.navigate(["listarescuela"])
  }
  editarescuela(){
    this.router.navigate(["editarescuela"])
  }
}
