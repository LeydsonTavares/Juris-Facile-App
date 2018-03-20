import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProfissoesPage } from './list-profissoes';

@NgModule({
  declarations: [
    ListProfissoesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListProfissoesPage),
  ],
})
export class ListProfissoesPageModule {}
