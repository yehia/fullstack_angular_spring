import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private httpClient: HttpClient) { }

  pesquisar(): Observable<any[]> {
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic YWRtaW46QG5ndWxAcjA=',
    });

    let options = {
      headers: headers
    }

    return this.httpClient.get<any>(`${this.lancamentosUrl}?resumo`, options)
      .pipe(
        catchError(err => {
            const message = 'Erro ao buscar lançamentos';
            return throwError(() => new Error(message, err));
        }),
      );
  }
}
