import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { M2iCoreModule, ERROR_LEVEL } from 'src/m2i-core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MainModule, M2iCoreModule,
  ],
  providers: [
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
