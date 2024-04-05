import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoJogo } from '../models/resultado';

@Injectable({ providedIn: 'root' })
export class BuscadorService {
  readonly api = 'https://loteriascaixa-api.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  buscarJogosAnteriores(): Observable<number[][]> {
    return this.http.get<number[][]>('assets/jogos.json');
  }

  buscarTodosOsResultados(tipoJogo: string): Observable<ResultadoJogo[]> {
    return this.http.get<ResultadoJogo[]>(`${this.api}/${tipoJogo}`);
  }

  buscarUltimoJogo(tipoJogo: string): Observable<ResultadoJogo> {
    return this.http.get<ResultadoJogo>(`${this.api}/${tipoJogo}/latest`);
  }
}
