import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema } from './../../model/tema';
import { ListTermosPage } from './../list-termos/list-termos';

@IonicPage()
@Component({
  selector: 'page-list-temas',
  templateUrl: 'list-temas.html',
})
export class ListTemasPage {

  selectedItem: any;
  listTemas: Tema[];
  pathPrevious: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('profissao');
    this.initializeItems();
  }

  initializeItems(){
    this.listTemas = this.selectedItem.listTemas;
    this.pathPrevious = this.selectedItem.titulo;

  }

  itemTapped(event, tema) {

    this.navCtrl.push(ListTermosPage, {
      tema: tema
    });
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listTemas = this.listTemas.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
