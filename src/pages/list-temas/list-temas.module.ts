import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTemasPage } from './list-temas';

@NgModule({
  declarations: [ListTemasPage],
  imports: [IonicPageModule.forChild(ListTemasPage),],
  exports: [ListTemasPage]
})
export class ListTemasPageModule {}
