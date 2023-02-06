import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    CadastroComponent      
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastroRoutingModule,
    MatFormFieldModule,       
    MatInputModule,
    MatButtonModule,     
  ],
  exports: [CadastroComponent],
})
export class CadastroModule { }
