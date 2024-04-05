import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ResultadoJogoComponent } from '../../components/resultado-jogo/resultado-jogo.component';
import { BuscadorService } from '../../services/buscador.service';
import { ResultadoJogo } from '../../models/resultado';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule, ResultadoJogoComponent],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss',
})
export class ResultadosComponent implements OnInit {
  resultados: ResultadoJogo[] = [];
  ultimosResultados: ResultadoJogo[] = [];

  private buscadorService = inject(BuscadorService);

  ngOnInit(): void {
    this.buscadorService.buscarTodosOsResultados('lotofacil').subscribe({
      next: (res) => {
        this.resultados = res;
        this.ultimosResultados = this.resultados.slice(0, 6);
      },
    });
  }
}
