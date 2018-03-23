import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ListProfissoesPage } from '../pages/list-profissoes/list-profissoes';
import { ListTemasPage } from './../pages/list-temas/list-temas';
import { ListTermosPage } from './../pages/list-termos/list-termos';
import { SubTermoPage } from './../pages/sub-termo/sub-termo';

@NgModule({
  declarations: [
    MyApp,
    ListProfissoesPage,
    ListTemasPage,
    ListTermosPage,
    SubTermoPage
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListProfissoesPage,
    ListTemasPage,
    ListTermosPage,
    SubTermoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
