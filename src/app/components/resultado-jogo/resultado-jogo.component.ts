import { Component, Input, OnInit } from '@angular/core';
import { ResultadoJogo } from '../../models/resultado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado-jogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultado-jogo.component.html',
  styleUrl: './resultado-jogo.component.scss',
})
export class ResultadoJogoComponent implements OnInit {
  @Input() resultado: ResultadoJogo | undefined;

  pares = 0;
  impares = 0;
  soma = 0;

  ordernacao: 'crescente' | 'sorteio' = 'crescente';

  ngOnInit(): void {
    this.pares = this.resultado!.dezenas.filter((numero) => Number(numero) % 2 === 0).length;
    this.impares = this.resultado!.dezenas.length - this.pares;
    this.soma = this.resultado!.dezenas.reduce((soma, valor) => soma + Number(valor), 0);
  }

  alterarOrdenacao(valor: 'crescente' | 'sorteio') {
    this.ordernacao = valor;
  }
}
