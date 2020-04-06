import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensorTemperaturaPageRoutingModule } from './sensor-temperatura-routing.module';

import { SensorTemperaturaPage } from './sensor-temperatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensorTemperaturaPageRoutingModule
  ],
  declarations: [SensorTemperaturaPage]
})
export class SensorTemperaturaPageModule {}
