import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTermosPage } from './list-termos';

@NgModule({
  declarations: [
    ListTermosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTermosPage),
  ],
})
export class ListTermosPageModule {}
