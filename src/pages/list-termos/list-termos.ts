import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Termo } from './../../model/termo';
import { ListTermos } from '../../model/mock';


@IonicPage()
@Component({
  selector: 'page-list-termos',
  templateUrl: 'list-termos.html',
})
export class ListTermosPage {

  selectedItem: any;
  listTermos: Termo[] = [];
  pathPrevious: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('tema');
    this.initializeItems();
  }

  initializeItems(){
    this.listTermos = ListTermos;
    this.pathPrevious = this.selectedItem.titulo;
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listTermos = this.listTermos.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  aboutClick(event) {
    this.navCtrl.push('SobrePage')
  };

}
