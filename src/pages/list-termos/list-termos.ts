import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Termo } from './../../model/termo';
import { SubTermoPage } from './../sub-termo/sub-termo';



@IonicPage()
@Component({
  selector: 'page-list-termos',
  templateUrl: 'list-termos.html',
})
export class ListTermosPage {

  selectedItem: any;
  listTermos: Termo[];
  pathPrevious: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('tema');
    this.initializeItems();
  }

  initializeItems(){
    this.listTermos = this.selectedItem.listTermos;
    this.pathPrevious = this.selectedItem.titulo;
  }

  itemTapped(event, termo) {

    this.navCtrl.push(SubTermoPage, {
      termo: termo
    });
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

}
