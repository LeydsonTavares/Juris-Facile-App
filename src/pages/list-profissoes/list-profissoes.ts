import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-profissoes',
  templateUrl: 'list-profissoes.html',
})
export class ListProfissoesPage {


  selectedItem: any;
  icons: string[];
  items: Array<{ title: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.selectedItem = navParams.get('item');

    this.items = [
      { title: 'Direito ' },
      { title: 'Sistemas ' },
      { title: 'Arquitetura ' },
      { title: 'Medicina ' },
      { title: 'Fisioterapia ' },
      { title: 'Engenharia Civil ' },
      { title: 'Jogos Digitais ' },
      { title: 'Administração ' }
    ];

  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListProfissoesPage, {
      item: item
    });
  }
}




