import { Routes } from '@angular/router';
import { GeradorJogoLotoComponent } from './pages/gerador-jogo-loto/gerador-jogo-loto.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/resultados',
    pathMatch: 'full',
  },
  {
    path: 'resultados',
    title: 'Resultados',
    component: ResultadosComponent,
  },
];
