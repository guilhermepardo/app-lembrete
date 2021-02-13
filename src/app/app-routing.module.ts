import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
const routes: Routes = [    //ESSA ARRAY SERVE PARA INSERIR OS PATHS DA SPA
  {path: '', component: ListaLembreteComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
