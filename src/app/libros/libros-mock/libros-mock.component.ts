import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'dvt-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {

  clave: string;
  aLibros: Array<Libro>;

  constructor(public booksSrv: BooksService) { }

  ngOnInit() {
    this.clave = 'angular';
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = this.booksSrv.getLibros(this.clave);
  }

  buscarAsync() {
    this.booksSrv.getLibrosAsync(this.clave).then(
      (data: any) => { this.aLibros = data; }, //Si todo va bien
      (error) => { console.log(error); } //Si algo va mal
      );
  }
}
