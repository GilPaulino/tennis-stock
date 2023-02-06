import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from '../inventario/inventario.component';

const routes: Routes = [
  {path: 'estoque', component: InventarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesRoutingModule { }
