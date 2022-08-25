import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { BtnKeyboardComponent } from '../btn-keyboard/btn-keyboard.component';
import { LettersGridComponent } from '../letters-grid/letters-grid.component';
import { ColorDirective } from '../directives/color.directive';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, BtnKeyboardComponent, LettersGridComponent, ColorDirective],
})
export class HomePageModule {}
