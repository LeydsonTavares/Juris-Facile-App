import { DisciplinasProvider } from './../../providers/disciplinas/disciplinas';
import { Disciplina } from './../../model/disciplina';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Tema } from './../../model/tema';


@IonicPage()
@Component({
  selector: 'page-list-temas',
  templateUrl: 'list-temas.html',
})
export class ListTemasPage {

  selectedItem: Disciplina;
  listTemas: Tema[] = [];
  pathPrevious: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public disciplinasProvider: DisciplinasProvider,
    public alertCtrl: AlertController) {
    this.selectedItem = navParams.get('disciplina');
    this.initializeItems();
  }

  initializeItems() {
    this.findFullDisciplina();
  }

  findFullDisciplina() {
    this.disciplinasProvider.findById(this.selectedItem.id)
      .subscribe(response => {
        this.selectedItem = response;
        this.listTemas = this.selectedItem.temas;
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

  itemTapped(event, tema) {

    this.navCtrl.push('ListTermosPage', {
      tema: tema
    });
  }

  getItems(ev: any) {
    this.listTemas = this.selectedItem.temas;
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listTemas = this.listTemas.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  aboutClick(event) {
    this.navCtrl.push('SobrePage')
  };

}
