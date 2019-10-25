import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-listarempleado',
  templateUrl: './listarempleado.component.html',
  styleUrls: ['./listarempleado.component.css']
})
export class ListarempleadoComponent implements OnInit {
  Empleados: Empleado[];
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.service.getEmpleados().subscribe(data=>{this.Empleados = data;});
  }
  editarempleado(empleados:Empleado):void{
    localStorage.setItem("idempleado",empleados.idempleado.toString());
    this.router.navigate(["editarempleado"]);
  }
  eliminarempleado(empleados:Empleado){
    this.service.deleteEmpleados(empleados).subscribe(data=>{
      this.Empleados=this.Empleados.filter(c=>c!==empleados);
      alert("Registro Eliminado correctamente...!")
    })
  }
}
