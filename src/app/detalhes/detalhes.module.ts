import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesRoutingModule } from './detalhes-routing.module';
import { DetalhesComponent } from './detalhes.component';


@NgModule({
  declarations: [
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    DetalhesRoutingModule
  ], 
  exports: [DetalhesComponent]
})
export class DetalhesModule { }
