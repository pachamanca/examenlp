import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-editarempleado',
  templateUrl: './editarempleado.component.html',
  styleUrls: ['./editarempleado.component.css']
})
export class EditarempleadoComponent implements OnInit {

  empleado: Empleado=new Empleado
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.editarempleado2();
  }
  /*Nuevo parametro para conseguir el "id" */
  editarempleado2(){
    let idempleado=localStorage.getItem("idempleado")
    this.service.getEmpleadosId(+idempleado).subscribe(data=>{this.empleado=data
    })
  }
  actualizarempleado(empleado: Empleado){
    this.service.updateEmpleados(empleado).subscribe(data=>{this.empleado=data;
    alert("se actualizo correctamente !! .....")
    this.router.navigate(["listarempleado"])})
  }

}
