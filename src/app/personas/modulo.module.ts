import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonServicesModule } from '../common-services';
import { PERSONAS_COMPONENTES } from './componente.component';
import { M2iCoreModule } from 'src/m2i-core';


@NgModule({
  declarations: [PERSONAS_COMPONENTES],
  exports: [PERSONAS_COMPONENTES],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    M2iCoreModule, CommonServicesModule,
  ]

})
export class PersonasModule { }
