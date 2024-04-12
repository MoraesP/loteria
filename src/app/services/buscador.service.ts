import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResultadoJogo } from '../models/resultado';

@Injectable({ providedIn: 'root' })
export class BuscadorService {
  readonly api = 'https://loteriascaixa-api.herokuapp.com/api';
  readonly api2 = 'https://apiloterias.com.br/app/v2/resultado?loteria=';

  constructor(private http: HttpClient) {}

  buscarUltimosJogos(jogo: string, quantidade: number) {
    return this.http
      .get<any[]>(
        `${this.api2}${jogo}&token=kJdfLjd38Jai2ek&concurso=ultimos${quantidade}`
      )
      .pipe(
        map((res) => {
          return res.map((valor) => {
            return {
              loteria: valor.nome,
              concurso: valor.numero_concurso,
              dezenas: valor.dezenas,
              acumulou: valor.acumulou,
              data: valor.data_concurso,
              dataProximoConcurso: valor.data_proximo_concurso,
              valorEstimadoProximoConcurso:
                valor.valor_estimado_proximo_concurso,
              premiacoes: valor.premiacao.map((premio: any) => {
                return {
                  descricao: premio.quantidade_acertos,
                  faixa: premio.faixa,
                  ganhadores: premio.numero_ganhadores,
                  valorPremio: premio.valor_premio,
                };
              }),
            } as ResultadoJogo;
          });
        })
      );
  }
  buscarTodosOsResultados(tipoJogo: string): Observable<ResultadoJogo[]> {
    return this.http.get<ResultadoJogo[]>(`${this.api}/${tipoJogo}`);
  }

  buscarUltimoJogo(tipoJogo: string): Observable<ResultadoJogo> {
    return this.http.get<ResultadoJogo>(`${this.api}/${tipoJogo}/latest`);
  }
}
