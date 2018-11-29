import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno, ICurso, Turno } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';

@Component({
  selector: 'dvt-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  oAlumno: Alumno;
  aCursos: Array<ICurso>;
  aTurnos: Array<Turno>;
  @ViewChild('form1') form: any;

  constructor() { }

  ngOnInit() {
    this.oAlumno = new Alumno();
    this.aCursos = CURSOS;
    this.aTurnos = TURNOS;
    console.dir(this.form);
  }

  enviar(event) {
    event.preventDefault();
    console.log(this.oAlumno);
  }
}