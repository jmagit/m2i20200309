import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'demos', componente: DemosComponent },
    { texto: 'inicio', componente: HomeComponent },
    { texto: 'calculadora', componente: CalculadoraComponent },
  ];
  seleccionado = this.menu[0].componente;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(indice: number) {
    this.seleccionado = this.menu[indice].componente;
  }
}
