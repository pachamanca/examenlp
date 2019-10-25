import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarcursoComponent } from './curso/listarcurso/listarcurso.component';
import { EditarcursoComponent } from './curso/editarcurso/editarcurso.component';
import { AgregarcursoComponent } from './curso/agregarcurso/agregarcurso.component';
import{FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service/service.service';
import { EditaralumnoComponent } from './alumno/editaralumno/editaralumno.component';
import { AgregaralumnoComponent } from './alumno/agregaralumno/agregaralumno.component';
import { ListaralumnoComponent } from './alumno/listaralumno/listaralumno.component';
import { AgregarempleadoComponent } from './empleado/agregarempleado/agregarempleado.component';
import { ListarempleadoComponent } from './empleado/listarempleado/listarempleado.component';
import { EditarempleadoComponent } from './empleado/editarempleado/editarempleado.component';
import { AgregarescuelaComponent } from './escuela/agregarescuela/agregarescuela.component';
import { ListarescuelaComponent } from './escuela/listarescuela/listarescuela.component';
import { EditarescuelaComponent } from './escuela/editarescuela/editarescuela.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarcursoComponent,
    EditarcursoComponent,
    AgregarcursoComponent,
    EditaralumnoComponent,
    AgregaralumnoComponent,
    ListaralumnoComponent,
    AgregarempleadoComponent,
    ListarempleadoComponent,
    EditarempleadoComponent,
    AgregarescuelaComponent,
    ListarescuelaComponent,
    EditarescuelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
