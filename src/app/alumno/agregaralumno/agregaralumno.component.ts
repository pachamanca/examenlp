import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Alumno } from 'src/app/modelo/alumno';

@Component({
  selector: 'app-agregaralumno',
  templateUrl: './agregaralumno.component.html',
  styleUrls: ['./agregaralumno.component.css']
})
export class AgregaralumnoComponent implements OnInit {

  /*alumno= carpeta- Alumno= clase definida en la carpeta modelo: new Alumno= objeto */
  alumno: Alumno=new Alumno
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }
  /* la funcion createAlumnos esta definido en el service*/
  guardaralumno(){
    this.service.createAlumnos(this.alumno).subscribe(data=>{alert("se registro correctamente ....")
    this.router.navigate(["listaralumno"])
    })
  }

}
