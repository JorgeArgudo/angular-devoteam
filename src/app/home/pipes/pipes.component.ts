import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  producto: string;
  altura: number;
  precio: number;
  fecha: Date;
  oDatos: {};
  frase: string;

  constructor() { }

  ngOnInit() {
    this.producto = 'Bolígrafo';
    this.altura = 32.8716;
    this.precio = 100;
    this.fecha = new Date();
    this.oDatos = {
      producto : 'Bolígrafo',
      altura : 32.8716,
      precio : 100
    }
    this.frase = 'Un anillo para gobernarlos a todos';
  }

}
