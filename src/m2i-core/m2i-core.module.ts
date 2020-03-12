import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipes';
import { M2iSizerComponent } from './components/m2i-sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { MIS_VALIDADORES } from './directives/validadores.directive';



@NgModule({
  declarations: [ PIPES_CADENAS, M2iSizerComponent, PIPES_NUMERICOS, MIS_VALIDADORES, ],
  exports: [ PIPES_CADENAS, M2iSizerComponent, PIPES_NUMERICOS, MIS_VALIDADORES, ],
  imports: [
    CommonModule
  ]
})
export class M2iCoreModule { }
