import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BuscadorService } from '../../services/buscador.service';
import { CommonModule } from '@angular/common';
import { ResultadoJogo } from '../../models/resultado';

@Component({
  selector: 'app-gerador-jogo-loto',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './gerador-jogo-loto.component.html',
  styleUrl: './gerador-jogo-loto.component.scss',
})
export class GeradorJogoLotoComponent implements OnInit {
  numerosGerados: number[] = [];

  readonly MENOR_NUMERO = 1;
  readonly MAIOR_NUMERO = 25;
  readonly QUANTIDADE_NUM_JOGADOS = 15;

  todosOsNumero: Array<{ numero: number; selecionado: boolean }> = [];

  sequenciaMaximaNumeros = 5;
  maisNumeros: 'IMPAR' | 'PAR' = 'PAR';
  porcentagens: Array<{ numero: number; porcentagem: number }> = [];

  private buscadorService = inject(BuscadorService);

  ngOnInit(): void {
    this.buscadorService.buscarTodosOsResultados('lotofacil').subscribe({
      next: (res) => {
        this.calcularPorcentagemDeFrequenciaDosNumeros(res);
      },
    });
  }

  gerarNumeros() {
    this.numerosGerados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  }

  private calcularPorcentagemDeFrequenciaDosNumeros(jogos: ResultadoJogo[]) {
    const quantidadeJogos = jogos.length;
    const todosOsNumeros = jogos
      .flatMap((jogo) => {
        return jogo.dezenas;
      })
      .map((valor) => Number(valor));
    for (let index = this.MENOR_NUMERO; index <= this.MAIOR_NUMERO; index++) {
      this.todosOsNumero.push({ numero: index, selecionado: false });
      const quantidadeExistente = todosOsNumeros.filter(
        (numero) => numero === index
      ).length;
      const porcentagem = (quantidadeExistente * 100) / quantidadeJogos;
      this.porcentagens.push({ numero: index, porcentagem: porcentagem });
    }
    this.porcentagens.sort((a, b) => a.porcentagem - b.porcentagem);
  }

  selecionarNumeroFixo(valor: { numero: number; selecionado: boolean }) {
    valor.selecionado = !valor.selecionado;
  }

  get todosNumerosSelecionados() {
    return this.todosOsNumero.filter((valor) => valor.selecionado).length === 5;
  }
}
