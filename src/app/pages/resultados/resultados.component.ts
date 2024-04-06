import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ResultadoJogoComponent } from '../../components/resultado-jogo/resultado-jogo.component';
import { BuscadorService } from '../../services/buscador.service';
import { ResultadoJogo } from '../../models/resultado';
import { MatIconModule } from '@angular/material/icon';
import { ResultadoJogoModule } from '../../components/resultado-jogo/resultado-jogo.module';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule, MatIconModule, ResultadoJogoModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss',
})
export class ResultadosComponent implements OnInit {
  resultados: ResultadoJogo[] = [];
  resultadosFiltrado: ResultadoJogo[] = [];
  paginasDeResultados: ResultadoJogo[][] = [];

  paginaAtual = 0;
  numeroDePaginas = 0;
  readonly ITENS_POR_PAGINA = 6;

  private buscadorService = inject(BuscadorService);

  ngOnInit(): void {
    this.buscadorService.buscarTodosOsResultados('lotofacil').subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.resultados = res;
          this.paginarResultado(res);
        }
      },
    });
  }

  private paginarResultado(resultados: ResultadoJogo[]) {
    this.resultadosFiltrado = resultados;
    let comeco = 0;
    let fim = this.ITENS_POR_PAGINA;
    this.paginasDeResultados = [];

    for (
      let i = 0;
      i < this.resultadosFiltrado.length / this.ITENS_POR_PAGINA;
      i++
    ) {
      this.paginasDeResultados.push(this.resultadosFiltrado.slice(comeco, fim));
      comeco += this.ITENS_POR_PAGINA;
      fim += this.ITENS_POR_PAGINA;
    }
    this.paginaAtual = 1;
    this.numeroDePaginas = this.paginasDeResultados.length;
  }

  voltarPagina() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
    }
  }

  proximaPagina() {
    if (this.paginaAtual < this.numeroDePaginas) {
      this.paginaAtual++;
    }
  }
}
