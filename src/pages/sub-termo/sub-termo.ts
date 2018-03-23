import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubTermo } from './../../model/subTermo';

@IonicPage()
@Component({
  selector: 'page-sub-termo',
  templateUrl: 'sub-termo.html',
})
export class SubTermoPage {

  selectedItem: any;
  listSubTermos: SubTermo[];
  pathPrevious: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedItem = navParams.get('termo');
    this.initializeItems();
  }

  initializeItems(){
    this.listSubTermos = this.selectedItem.listSubTermos;
    this.pathPrevious = this.selectedItem.titulo;
  }
  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listSubTermos = this.listSubTermos.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
