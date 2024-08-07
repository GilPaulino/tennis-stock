import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';

@NgModule({
  declarations: [
    LoginComponent,
    CadastroLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [LoginComponent],
})
export class LoginModule { }
