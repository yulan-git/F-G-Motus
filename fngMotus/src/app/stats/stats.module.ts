import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatsPage } from './stats.page';
import { StatsPageRoutingModule } from './stats-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StatsPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  exports: [],
  declarations: []
})
export class StatsPageModule {}
