import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    // this.notify.add('Notificación desde el componente principal');
  }

}
