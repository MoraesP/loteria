import { NgModule } from '@angular/core';
import { ResultadoJogoComponent } from './resultado-jogo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ResultadoJogoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    MatIconModule
  ],
  providers: [],
  exports: [ResultadoJogoComponent],
})
export class ResultadoJogoModule {}
