import { NaoExisteComponent } from './nao-existe/nao-existe.component';
import { OutraComponent } from './outra/outra.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CrudComponent as CrudProduto } from './produtos/crud/crud.component';
// import { CrudComponent as CrudListas } from './listas/crud/crud.component';

const routes: Routes = [

  { path: 'principal', component: PrincipalComponent },
  // Quando importa o modulo no app.module.ts, não precisa criar as rotas do módulo aqui
  // { path: 'produtos', component: CrudProduto },
  // { path: 'listas', component: CrudListas },
  { path: 'outra', component: OutraComponent },
  // Se não informar nada, vai para o principal
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  // Se colocar qualquer rota que não existe, usa essa rota
  { path: '**', component: NaoExisteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
