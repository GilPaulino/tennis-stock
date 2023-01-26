import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhadaRoutingModule } from './detalhada-routing.module';
import { DetalhadaComponent } from './detalhada.component';


@NgModule({
  declarations: [
    DetalhadaComponent
  ],
  imports: [
    CommonModule,
    DetalhadaRoutingModule
  ], 
  exports: [DetalhadaComponent]
})
export class DetalhadaModule { }
