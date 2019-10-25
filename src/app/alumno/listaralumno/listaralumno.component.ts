import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Alumno } from 'src/app/modelo/alumno';

@Component({
  selector: 'app-listaralumno',
  templateUrl: './listaralumno.component.html',
  styleUrls: ['./listaralumno.component.css']
})
export class ListaralumnoComponent implements OnInit {
  Alumnos: Alumno[];
  constructor(private router: Router, private service: ServiceService) {
  }
  ngOnInit() {
    this.service.getAlumnos().subscribe(data=>{this.Alumnos = data;});
  }
  editaralumno(alumnos:Alumno):void{
    localStorage.setItem("idalumno",alumnos.idalumno.toString());
    this.router.navigate(["editaralumno"]);
  }
  eliminaralumno(alumnos:Alumno){
    this.service.deleteAlumnos(alumnos).subscribe(data=>{
      this.Alumnos=this.Alumnos.filter(c=>c!==alumnos);
      alert("Registro Eliminado correctamente...!")
    })
  }

}
