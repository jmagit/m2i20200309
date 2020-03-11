import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipes';
import { M2iSizerComponent } from './components/m2i-sizer.component';



@NgModule({
  declarations: [ PIPES_CADENAS, M2iSizerComponent, ],
  exports: [ PIPES_CADENAS, M2iSizerComponent, ],
  imports: [
    CommonModule
  ]
})
export class M2iCoreModule { }
