import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { EstoqueComponent } from './estoque.component';

const routes: Routes = [
  {path:'', component: EstoqueComponent},
  {path: 'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
