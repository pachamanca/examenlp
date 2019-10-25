import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Curso } from 'src/app/modelo/curso';

@Component({
  selector: 'app-listarcurso',
  templateUrl: './listarcurso.component.html',
  styleUrls: ['./listarcurso.component.css']
})
export class ListarcursoComponent implements OnInit {
  Cursos: Curso[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getCursos().subscribe(data=>{this.Cursos = data;});
  }

  editarcurso(cursos:Curso):void{
    localStorage.setItem("idcurso",cursos.idcurso.toString());
    this.router.navigate(["editarcurso"]);
  }

  eliminarcurso(cursos:Curso){
    this.service.deleteCursos(cursos).subscribe(data=>{
      this.Cursos=this.Cursos.filter(c=>c!==cursos);
      alert("Registro Eliminado correctamente...!")
    })
  }
}
