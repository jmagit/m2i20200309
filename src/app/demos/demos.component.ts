import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable;

  nombre = 'Mundo';
  listado = [
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'TOLEDO' },
    { id: 3, nombre: 'albacete' },
    { id: 4, nombre: 'BarcelonA' },
  ];
  idProvincia = 2;
  fontSize = 24;

  resultado: string = null;
  visible = true;
  estetica = { importante: true, error: false, urgente: true };

  constructor(public vm: NotificationService) { }

  saluda() {
    this.resultado = `Hola ${this.nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  add(provincia: string) {
    const id = this.listado[this.listado.length - 1].id + 1;
    this.listado.push({ id, nombre: provincia });
    this.idProvincia = id;
  }

  ngOnInit(): void {
    // this.suscriptor = this.vm.Notificacion.subscribe(n => {
    //   if (n.Type !== NotificationType.error) { return; }
    //   window.alert(`Suscripcion: ${n.Message}`);
    //   this.vm.remove(this.vm.Listado.length - 1);
    // });

  }
  ngOnDestroy(): void {
    // if (this.suscriptor) {
    //   this.suscriptor.unsubscribe();
    // }
  }

  // tslint:disable:member-ordering
  idiomas = [
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portuges' },
    { codigo: 'en-US', region: 'USA' }
  ];
  idioma = this.idiomas[0].codigo;
  calculos: any[] = [];
  valCalculadora = 666;
  // tslint:enable:member-ordering

  ponResultado(origen: string, valor: any) {
    this.calculos.push({
      pos: this.calculos.length + 1,
      origen,
      valor
    });
  }

}
