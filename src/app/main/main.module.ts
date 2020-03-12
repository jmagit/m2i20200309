import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { AjaxWaitComponent } from './ajax-wait';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecurityModule } from '../security';



@NgModule({
  declarations: [
    NotificationComponent,
    AjaxWaitComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  exports: [
    NotificationComponent,
    AjaxWaitComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild([]), SecurityModule,
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
 }
