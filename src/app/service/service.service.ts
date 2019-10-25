import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import{Curso} from '../modelo/curso'
import { Alumno } from '../modelo/alumno';
import { Escuela } from '../modelo/escuela';
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

   /* Service de Curso*/
  Url='http://localhost:9898/cursos/'
  getCursos(){
    return this.http.get<Curso[]>(this.Url)
  }
  createCursos(curso: Curso){
    return this.http.post<Curso>(this.Url+"add",curso);   
  }
  getCursosId(idcurso:number){
    return this.http.get<Curso>(this.Url+idcurso);
  }
  updateCursos(cursos:Curso){
    return this.http.put<Curso>(this.Url + cursos.idcurso ,cursos);
  }
  deleteCursos(cursos:Curso){
    return this.http.delete<Curso>(this.Url+cursos.idcurso);
  }



   /* Service de Alumno*/
  Url2='http://localhost:9898/alumnos/'
  getAlumnos(){
    return this.http.get<Alumno[]>(this.Url2)
  }
  createAlumnos(alumnos: Alumno){
    return this.http.post<Alumno>(this.Url2+"add",alumnos);   
  }
  getAlumnosId(idalumno:number){
    return this.http.get<Alumno>(this.Url2+idalumno);
  }
  updateAlumnos(alumnos: Alumno){
    return this.http.put<Alumno>(this.Url2+alumnos.idalumno,alumnos);
  }
  deleteAlumnos(alumnos:Alumno){
    return this.http.delete<Alumno>(this.Url2+alumnos.idalumno);
  }


   /* Service de Empleado*/
  Url3='http://localhost:9898/empleados/'
  getEmpleados(){
    return this.http.get<Empleado[]>(this.Url3)
  }
  createEmpleados(empleados:Empleado){
    return this.http.post<Empleado>(this.Url3+"add",empleados);   
  }
  getEmpleadosId(idempleado:number){
    return this.http.get<Empleado>(this.Url3+idempleado);
  }
  updateEmpleados(empleados: Empleado){
    return this.http.put<Empleado>(this.Url3+empleados.idempleado,empleados);
  }
  deleteEmpleados(empleados:Empleado){
    return this.http.delete<Empleado>(this.Url3+empleados.idempleado);
  }



  /* Service de Escuela*/
  Url4='http://localhost:9898/escuelas/'
  getEscuelas(){
    return this.http.get<Escuela[]>(this.Url4)
  } 
  createEscuelas(escuelas: Escuela){
    return this.http.post<Escuela>(this.Url4+"add",escuelas);   
  }    
  getEscuelasId(idescuela:number){
    return this.http.get<Escuela>(this.Url4+idescuela);
  }
     
  updateEscuelas(escuelas: Escuela){
    return this.http.put<Escuela>(this.Url4+escuelas.idescuela,escuelas);
  }    
  deleteEscuelas(escuelas:Escuela){
    return this.http.delete<Escuela>(this.Url4+escuelas.idescuela);
  }
  
}
