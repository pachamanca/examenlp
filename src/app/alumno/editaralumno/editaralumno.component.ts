import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-editaralumno',
  templateUrl: './editaralumno.component.html',
  styleUrls: ['./editaralumno.component.css']
})
export class EditaralumnoComponent implements OnInit {

  alumno: Alumno=new Alumno
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this. editaralumno2();
  }
  editaralumno2(){
    let idalumno= localStorage.getItem("idalumno");
    this.service.getAlumnosId(+idalumno).subscribe(data=>{this.alumno=data})
  }
  actualizaralumno(alumno: Alumno){
    this.service.updateAlumnos(alumno).subscribe(data=>{this.alumno=data
      alert("se actualizo correctamente .....")
      this.router.navigate(["listaralumno"])
    })
  }

}
