import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M2iCoreModule, ERROR_LEVEL } from 'src/m2i-core';
import { environment } from 'src/environments/environment';
import { MainModule } from './main';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent } from './home/home.component';
import { DinamicoComponent } from './dinamico/dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    HomeComponent,
    DinamicoComponent
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
