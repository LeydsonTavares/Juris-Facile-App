import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { timer } from 'rxjs/observable/timer';
import { AuthProvider } from '../providers/auth/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'ListProfissoesPage';
  splash = true;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public auth: AuthProvider,
    public alertCtrl: AlertController) {
    this.initializeApp();
  }

  initializeApp() {
    this.authenticateApp();
  }

  authenticateApp() {
    this.auth.authenticate()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.platform.ready().then(() => {
          timer(3000).subscribe(() => this.splash = false)
        });
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
                  this.initializeApp();
                }
              }
            ]
          });
          alert.present();
        });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}


