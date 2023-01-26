import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhadaComponent } from './detalhada/detalhada.component';
import { EstoqueComponent } from './estoque/estoque.component';


const routes: Routes = [
  {path: '', redirectTo: 'estoque', pathMatch: 'full'}, 
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro/:id', component: CadastroComponent},
  {path: 'estoque', component: EstoqueComponent},  
  {path: 'detalhada', component: DetalhadaComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
