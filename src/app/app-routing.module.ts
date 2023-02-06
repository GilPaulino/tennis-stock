import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { InventarioComponent } from './inventario/inventario.component';


const routes: Routes = [
  {path: '', redirectTo: 'inventario', pathMatch: 'full'}, 
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro/:id', component: CadastroComponent},
  {path: 'inventario', component: InventarioComponent},  
  {path: 'detalhada', component: DetalhesComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
