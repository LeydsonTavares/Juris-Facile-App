import { Disciplina } from './../../model/disciplina';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profissao } from '../../model/profissao';

@IonicPage()
@Component({
  selector: 'page-list-disciplinas',
  templateUrl: 'list-disciplinas.html',
})
export class ListDisciplinasPage {

  selectedItem: Profissao;
  listDisciplinas: Disciplina[] = [];
  pathPrevious: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('profissao');
    this.initializeItems();
  }

  initializeItems(){
    this.listDisciplinas = this.selectedItem.disciplinas;
    this.pathPrevious = this.selectedItem.titulo;
  }

  itemTapped(event, disciplina) {

    this.navCtrl.push('ListTemasPage', {
      disciplina: disciplina
    });
  }

  getItems(ev: any) {
    this.listDisciplinas = this.selectedItem.disciplinas;
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listDisciplinas = this.listDisciplinas.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  aboutClick(event) {
    this.navCtrl.push('SobrePage')
  };

}









