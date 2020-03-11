import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipes';
import { M2iSizerComponent } from './components/m2i-sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';



@NgModule({
  declarations: [ PIPES_CADENAS, M2iSizerComponent, PIPES_NUMERICOS, ],
  exports: [ PIPES_CADENAS, M2iSizerComponent, PIPES_NUMERICOS, ],
  imports: [
    CommonModule
  ]
})
export class M2iCoreModule { }
