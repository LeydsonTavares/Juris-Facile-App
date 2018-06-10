import { TermoProvider } from './../../providers/termos/termos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Termo } from './../../model/termo';


@IonicPage()
@Component({
  selector: 'page-list-termos',
  templateUrl: 'list-termos.html',
})
export class ListTermosPage {

  selectedItem: any;
  listTermos: Termo[] = [];
  pathPrevious: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public termosProvider: TermoProvider,
    public alertCtrl: AlertController) {
    this.selectedItem = navParams.get('tema');
    this.initializeItems();
  }

  initializeItems(){
    this.findTermos(this.selectedItem.id);
  }

  findTermos(idTema: number) {
    this.termosProvider.findTermosByTemaId(idTema)
      .subscribe(response => {
        this.listTermos = response;
        this.pathPrevious = this.selectedItem.titulo;
      },
      error => {
        let alert = this.alertCtrl.create({
          title: 'Que pena!',
          message: 'A comunicação com o servidor falhou, verifique sua conexão e tente novamente',
          enableBackdropDismiss: false,
          buttons: [
            {
              text: 'Ok :(',
            }
          ]
        });
        alert.present();
      });
  }

  getItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listTermos = this.listTermos.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.initializeItems();
    }
  }
  
  aboutClick(event) {
    this.navCtrl.push('SobrePage')
  };

}
