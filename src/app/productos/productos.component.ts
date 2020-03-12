import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  elemento = {
    id: 1,
    nombre: 'Patatas',
    descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    precio: 2
  }

  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    // ...
  }

  cancelar() {
    //this.elemento = { };
  }
}
