import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EstoqueModule } from './estoque/estoque.module';
import { DetalhadaModule } from './detalhada/detalhada.module';
import { CadastroModule } from './cadastro/cadastro.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressBarModule,  
    CadastroModule,
    EstoqueModule,            
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule ,
    MatButtonModule,       
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
