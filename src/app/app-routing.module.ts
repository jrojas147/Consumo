import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentepasosComponent } from './componentes/componentepasos/componentepasos.component';
import { TipoVehiculoComponent } from './componentes/tipo-moto/tipo-vehiculo.component';


const routes: Routes = [
  {
    component: ComponentepasosComponent,
    path: 'carros'
  },
  {
    component: TipoVehiculoComponent,
    path: 'motos'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
