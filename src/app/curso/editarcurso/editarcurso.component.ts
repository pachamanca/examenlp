import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Curso } from 'src/app/modelo/curso';

@Component({
  selector: 'app-editarcurso',
  templateUrl: './editarcurso.component.html',
  styleUrls: ['./editarcurso.component.css']
})
export class EditarcursoComponent implements OnInit {

  curso: Curso= new Curso
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.editar();
  }
  editar(){
    let idcurso=localStorage.getItem("idcurso");
    this.service.getCursosId(+idcurso).subscribe(data=>{this.curso=data}
  )}

  actualizar(curso:Curso){
    this.service.updateCursos(curso).subscribe(data=>{this.curso=data;
      alert("se actualizo correctamente !! .....")
      this.router.navigate(["listarcurso"])
    })
  }
}
