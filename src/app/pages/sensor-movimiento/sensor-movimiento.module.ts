import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensorMovimientoPageRoutingModule } from './sensor-movimiento-routing.module';

import { SensorMovimientoPage } from './sensor-movimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensorMovimientoPageRoutingModule
  ],
  declarations: [SensorMovimientoPage]
})
export class SensorMovimientoPageModule {}
