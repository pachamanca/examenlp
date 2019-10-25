import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Escuela } from 'src/app/modelo/escuela';

@Component({
  selector: 'app-listarescuela',
  templateUrl: './listarescuela.component.html',
  styleUrls: ['./listarescuela.component.css']
})
export class ListarescuelaComponent implements OnInit {
  Escuelas: Object[];
  constructor(private router: Router, private service: ServiceService) {
  }
  
  ngOnInit() {
    this.service.getEscuelas().subscribe(data=>{this.Escuelas = data;});
  }

  editarescuela(escuelas:Escuela):void{
    localStorage.setItem("idescuela",escuelas.idescuela.toString());
    this.router.navigate(["editarescuela"]);
  }
  eliminarescuela(escuelas:Escuela){
    this.service.deleteEscuelas(escuelas).subscribe(data=>{
      this.Escuelas=this.Escuelas.filter(c=>c!==escuelas);
      alert("Registro Eliminado correctamente...!")
    })
  }
}
