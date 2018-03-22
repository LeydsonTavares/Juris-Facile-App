import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-list-profissoes',
  templateUrl: 'list-profissoes.html',
})
export class ListProfissoesPage {



  selectedItem: any;
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {

    this.statusBar.overlaysWebView(true);
    // set status bar to white
    this.statusBar.styleBlackOpaque();

    this.initializeItems();

    this.selectedItem = navParams.get('item');

  }

  initializeItems() {
    this.items = [
      'Direito ',
      'Sistemas ',
      'Arquitetura ',
      'Medicina ',
      'Fisioterapia ',
      'Engenharia Civil ',
      'Jogos Digitais ',
      'Administração '
    ];

  }

  itemTapped(event, item) {

    this.navCtrl.push(ListProfissoesPage, {
      item: item
    });
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }




}




