import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profissao } from './../../model/profissao';
import { Tema } from './../../model/tema';
import { Termo } from './../../model/termo';
import { SubTermo } from './../../model/subTermo';


@IonicPage()
@Component({
  selector: 'page-list-profissoes',
  templateUrl: 'list-profissoes.html',
})
export class ListProfissoesPage {

  searchQuery: string = '';
  listProfissoes: Profissao[];
  listTemas:Tema[];
  listTermos:Termo[];
  listSubTermos:SubTermo[];
  


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.initializeItems();
  }

  initializeItems() {
    
 
      this.listSubTermos = [
      new SubTermo(0, 'SubTermo 1', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
      new SubTermo(1, 'SubTermo 2', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
      new SubTermo(3, 'SubTermo 3', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
      new SubTermo(4, 'SubTermo 4', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
      new SubTermo(5, 'SubTermo 5', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")];

      this.listTermos = [
        new Termo(0, 'Termo 1',this.listSubTermos),
        new Termo(1, 'Termo 2',this.listSubTermos),
        new Termo(3, 'Termo 3',this.listSubTermos),
        new Termo(4, 'Termo 4',this.listSubTermos),
        new Termo(5, 'Termo 5',this.listSubTermos)];

      this.listTemas = [
        new Tema(0, 'Tema 1',this.listTermos),
        new Tema(1, 'Tema 2',this.listTermos),
        new Tema(3, 'Tema 3',this.listTermos),
        new Tema(4, 'Tema 4',this.listTermos),
        new Tema(5, 'Tema 5',this.listTermos)];

      this.listProfissoes = [
        new Profissao(0, 'Sistemas de Informação',this.listTemas),
        new Profissao(1, 'Direito',this.listTemas),
        new Profissao(3, 'Administração',this.listTemas),
        new Profissao(4, 'Arquitetura',this.listTemas),
        new Profissao(5, 'Medicina',this.listTemas),
        new Profissao(6, 'Fisioterapia',this.listTemas),
        new Profissao(7, 'Engenharia Civil',this.listTemas),
        new Profissao(8, 'Administração',this.listTemas),
        new Profissao(9, 'Arquitetura',this.listTemas),
        new Profissao(10, 'Jogos Digitais',this.listTemas)];



  }





  itemTapped(event, profissao) {

    this.navCtrl.push('ListTemasPage', {
      profissao: profissao
    });
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listProfissoes = this.listProfissoes.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }




}




