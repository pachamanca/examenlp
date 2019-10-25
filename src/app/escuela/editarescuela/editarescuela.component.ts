import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Escuela } from 'src/app/modelo/escuela';

@Component({
  selector: 'app-editarescuela',
  templateUrl: './editarescuela.component.html',
  styleUrls: ['./editarescuela.component.css']
})
export class EditarescuelaComponent implements OnInit {

  escuela: Escuela=new Escuela
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.editarescuela2();
  }
  editarescuela2(){
    let idescuela=localStorage.getItem("idescuela");
    this.service.getEscuelasId(+idescuela).subscribe(data=>{this.escuela=data}
  )}
  actualizarescuela(escuela:Escuela){
    this.service.updateEscuelas(escuela).subscribe(data=>{this.escuela=data;
      alert("se actualizo correctamente !! .....")
      this.router.navigate(["listarescuela"])
    })
  }

}
