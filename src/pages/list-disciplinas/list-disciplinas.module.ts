import { ListDisciplinasPage } from './list-disciplinas';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ListDisciplinasPage],
  imports: [IonicPageModule.forChild(ListDisciplinasPage)],
  exports: [ListDisciplinasPage]
  
})
export class ListDisciplinasPageModule { 
  
}
