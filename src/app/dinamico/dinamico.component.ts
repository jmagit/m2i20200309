import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ProductosComponent } from '../productos/productos.component';
import { PersonasComponent } from '../personas';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'personas', componente: PersonasComponent },
    { texto: 'inicio', componente: HomeComponent },
    { texto: 'demos', componente: DemosComponent },
    { texto: 'calculadora', componente: CalculadoraComponent },
    { texto: 'productos', componente: ProductosComponent },
  ];
  seleccionado = this.menu[0].componente;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(indice: number) {
    this.seleccionado = this.menu[indice].componente;
  }
}
