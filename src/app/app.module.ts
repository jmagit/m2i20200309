import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es', localeEsExtra);
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M2iCoreModule, ERROR_LEVEL } from 'src/m2i-core';
import { environment } from 'src/environments/environment';
import { MainModule } from './main';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent } from './home/home.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ProductosComponent } from './productos/productos.component';
import { PersonasModule } from './personas';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    HomeComponent,
    DinamicoComponent,
    CalculadoraComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, MainModule, M2iCoreModule, PersonasModule,
  ],
  providers: [
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
