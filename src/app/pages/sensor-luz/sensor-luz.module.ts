import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensorLuzPageRoutingModule } from './sensor-luz-routing.module';

import { SensorLuzPage } from './sensor-luz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensorLuzPageRoutingModule
  ],
  declarations: [SensorLuzPage]
})
export class SensorLuzPageModule {}
