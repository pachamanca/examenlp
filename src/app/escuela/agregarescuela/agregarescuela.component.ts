import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Escuela } from 'src/app/modelo/escuela';

@Component({
  selector: 'app-agregarescuela',
  templateUrl: './agregarescuela.component.html',
  styleUrls: ['./agregarescuela.component.css']
})
export class AgregarescuelaComponent implements OnInit {

  escuela: Escuela=new Escuela
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }
  guardarescuela(){
    this.service.createEscuelas(this.escuela).subscribe(data=>{alert("se registro correctamente ....")
    this.router.navigate(["listarescuela"])
    })
  }

}
