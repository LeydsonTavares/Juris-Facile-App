import { TermoProvider } from './../providers/termos/termos';
import { DisciplinasProvider } from './../providers/disciplinas/disciplinas';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth/auth';
import { StorageProvider } from '../providers/storage/storage';
import { HttpClientModule } from '@angular/common/http';
import { ProfissoesProvider } from '../providers/profissoes/profissoes';
import { AuthInterceptorProvider } from '../interceptors/auth.interceptor';


@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    AuthProvider,
    AuthInterceptorProvider,
    StorageProvider,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProfissoesProvider,
    TermoProvider,
    DisciplinasProvider
  ]
})
export class AppModule { }
