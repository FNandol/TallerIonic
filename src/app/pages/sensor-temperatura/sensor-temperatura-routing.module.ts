import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensorTemperaturaPage } from './sensor-temperatura.page';

const routes: Routes = [
  {
    path: '',
    component: SensorTemperaturaPage
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensorTemperaturaPageRoutingModule {}
