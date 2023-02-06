import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InventarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    InventarioRoutingModule,
    MatFormFieldModule,
    MatInputModule,   
    MatProgressSpinnerModule, 
  ],
  exports: [InventarioComponent],
})
export class InventarioModule { }