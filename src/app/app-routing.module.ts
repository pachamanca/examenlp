import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarcursoComponent } from './curso/agregarcurso/agregarcurso.component';
import { ListarcursoComponent } from './curso/listarcurso/listarcurso.component';
import { EditarcursoComponent } from './curso/editarcurso/editarcurso.component';
import { AgregaralumnoComponent } from './alumno/agregaralumno/agregaralumno.component';
import { ListaralumnoComponent } from './alumno/listaralumno/listaralumno.component';
import { EditaralumnoComponent } from './alumno/editaralumno/editaralumno.component';
import { AgregarempleadoComponent } from './empleado/agregarempleado/agregarempleado.component';
import { ListarempleadoComponent } from './empleado/listarempleado/listarempleado.component';
import { EditarempleadoComponent } from './empleado/editarempleado/editarempleado.component';
import { AgregarescuelaComponent } from './escuela/agregarescuela/agregarescuela.component';
import { ListarescuelaComponent } from './escuela/listarescuela/listarescuela.component';
import { EditarescuelaComponent } from './escuela/editarescuela/editarescuela.component';


const routes: Routes = [
  {path: 'agregarcurso', component: AgregarcursoComponent},
  {path: 'listarcurso', component: ListarcursoComponent},
  {path: 'editarcurso', component: EditarcursoComponent},
  {path: 'agregaralumno', component: AgregaralumnoComponent},
  {path: 'listaralumno', component: ListaralumnoComponent},
  {path: 'editaralumno', component: EditaralumnoComponent},
  {path: 'agregarempleado', component: AgregarempleadoComponent},
  {path: 'listarempleado', component: ListarempleadoComponent},
  {path: 'editarempleado', component: EditarempleadoComponent},
  {path: 'agregarescuela', component: AgregarescuelaComponent},
  {path: 'listarescuela', component: ListarescuelaComponent},
  {path: 'editarescuela', component: EditarescuelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
