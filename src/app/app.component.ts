import { Component, OnInit } from '@angular/core';
import { LoggerService, ERROR_LEVEL } from 'src/m2i-core';
import { NotificationService } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola Mundo';

  // constructor(private out: LoggerService) {}

  // ngOnInit(): void {
  //   this.out.error('Esto es un error');
  //   this.out.warn('Esto es un warn');
  //   this.out.info('Esto es un info');
  //   this.out.log('Esto es un log');
  // }
  constructor(private notify: NotificationService) {}

  ngOnInit(): void {
    this.notify.add('Notificación desde el componente principal');
  }
}
