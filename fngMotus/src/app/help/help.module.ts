import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelpPage } from './help.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HelpPageRoutingModule } from './help-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: HelpPage }]),
    HelpPageRoutingModule,
  ],
  declarations: [HelpPage]
})
export class HelpPageModule {}
