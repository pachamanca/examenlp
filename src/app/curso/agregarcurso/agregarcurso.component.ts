import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Curso } from 'src/app/modelo/curso';

@Component({
  selector: 'app-agregarcurso',
  templateUrl: './agregarcurso.component.html',
  styleUrls: ['./agregarcurso.component.css']
})
export class AgregarcursoComponent implements OnInit {

  curso: Curso=new Curso();
  
  constructor(private router: Router, private service: ServiceService ){
   }

  ngOnInit() {
  }
  guardarcurso(){
    this.service.createCursos(this.curso).subscribe(data=>{alert("se registro correctamente ....")
      this.router.navigate(["listarcurso"])
    })
  }
}
