import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { timer } from 'rxjs/observable/timer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'ListProfissoesPage';  
  splash = true;

  constructor(public platform: Platform, public statusBar: StatusBar) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
     
        timer(3000).subscribe(() => this.splash = false)
      
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}


