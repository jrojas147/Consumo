import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentepasosComponent } from './componentes/componentepasos/componentepasos.component';


const routes: Routes = [
  {
    component: ComponentepasosComponent,
    path: 'carros'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
