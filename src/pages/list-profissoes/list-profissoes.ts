import { ProfissoesProvider } from './../../providers/profissoes/profissoes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Profissao } from './../../model/profissao';

@IonicPage()
@Component({
  selector: 'page-list-profissoes',
  templateUrl: 'list-profissoes.html',
})
export class ListProfissoesPage {

  listProfissoes: Profissao[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profissoesProvider: ProfissoesProvider,
    public alertCtrl: AlertController) {
    this.findAllProfissoes();
  }

  findAllProfissoes() {
    console.log("opa");
    
    this.profissoesProvider.findAll()
      .subscribe(response => {
        this.listProfissoes = response;
      },
        error => {
          let alert = this.alertCtrl.create({
            title: 'Que pena!',
            message: 'A comunicação com o servidor falhou, verifique sua conexão e tente novamente',
            enableBackdropDismiss: false,
            buttons: [
              {
                text: 'Tentar novamente',
                handler: () => {
                  this.findAllProfissoes();
                }
              }
            ]
          });
          alert.present();
        });
  }

  itemTapped(event, profissao) {
    this.navCtrl.push('ListDisciplinasPage', {
      profissao: profissao
    });
  }

  getItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.listProfissoes = this.listProfissoes.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.findAllProfissoes();
    }
  }

  aboutClick(event) {
    this.navCtrl.push('SobrePage')
  };
}









