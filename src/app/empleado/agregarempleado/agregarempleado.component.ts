import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-agregarempleado',
  templateUrl: './agregarempleado.component.html',
  styleUrls: ['./agregarempleado.component.css']
})
export class AgregarempleadoComponent implements OnInit {

  empleado: Empleado=new Empleado
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }
  guardarempleado(){
    this.service.createEmpleados(this.empleado).subscribe(data=>{alert("Se registro correctamente....")
    this.router.navigate(["listarempleado"])})
  }

}
