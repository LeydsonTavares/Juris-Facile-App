import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubTermoPage } from './sub-termo';

@NgModule({
  declarations: [SubTermoPage],
  imports: [IonicPageModule.forChild(SubTermoPage)],
  exports: [SubTermoPage]
})
export class SubTermoPageModule {}
