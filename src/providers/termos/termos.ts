import { Termo } from './../../model/termo';
import { Disciplina } from './../../model/disciplina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from '../../config/api.config';

/*
  Generated class for the DisciplinasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TermoProvider {

  constructor(public http: HttpClient) {
  }

  findTermosByTemaId(id: number): Observable<Termo[]> {
    return this.http.get<Termo[]>(`${API_CONFIG.baseUrl}/termos/tema/${id}`);
  }

}
