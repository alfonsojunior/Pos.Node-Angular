import { EditaComponent } from './edita/edita.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: CrudComponent,
    children: [
      {path: '', component: ListaComponent},
      {path: 'edita/:id', component: EditaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
