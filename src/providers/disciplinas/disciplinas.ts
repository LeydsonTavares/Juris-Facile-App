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
export class DisciplinasProvider {

  constructor(public http: HttpClient) {
  }

  findById(id: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(`${API_CONFIG.baseUrl}/disciplinas/${id}`);
  }

}
