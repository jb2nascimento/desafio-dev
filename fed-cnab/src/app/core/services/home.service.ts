import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseApi } from 'src/app/models/ResponseApi';
import { Transacao } from 'src/app/models/Transacao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public findAllTransactions(): Observable<Map<string, Array<Transacao>>> {
    return this.http.get<ResponseApi<Array<Transacao>>>(environment.api.cnab).pipe(
      map(response => {
        return this.groupBy(response.details);
      })
    )
  }

  private groupBy(transacoes: Array<Transacao>): Map<string, Array<Transacao>> {
      return transacoes.reduce((entryMap, e) => entryMap.set(e.nomeLoja, [...entryMap.get(e.nomeLoja) || [], e]), new Map());
  }

}

