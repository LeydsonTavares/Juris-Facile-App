import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Profissao } from '../../model/profissao';
import { API_CONFIG } from '../../config/api.config';

/*
  Generated class for the ProfissoesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfissoesProvider {

  constructor(public http: HttpClient) {
  }

  findAll() : Observable<Profissao[]>  {
    return this.http.get<Profissao[]>(`${API_CONFIG.baseUrl}/profissaos`);
}

}
