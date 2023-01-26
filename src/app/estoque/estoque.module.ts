import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    EstoqueRoutingModule,
    MatFormFieldModule,
    MatInputModule,    
  ],
  exports: [EstoqueComponent],
})
export class EstoqueModule { }