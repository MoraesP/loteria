import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsModalRef, BsModalService, ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { ResultadoJogo } from '../../models/resultado';

@Component({
  selector: 'app-resultado-jogo',
  templateUrl: './resultado-jogo.component.html',
  styleUrl: './resultado-jogo.component.scss',
})
export class ResultadoJogoComponent implements OnInit {
  @Input() resultado: ResultadoJogo | undefined;

  pares = 0;
  impares = 0;
  soma = 0;

  ordernacao: 'crescente' | 'sorteio' = 'crescente';

  modalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.pares = this.resultado!.dezenas.filter(
      (numero) => Number(numero) % 2 === 0
    ).length;
    this.impares = this.resultado!.dezenas.length - this.pares;
    this.soma = this.resultado!.dezenas.reduce(
      (soma, valor) => soma + Number(valor),
      0
    );
  }

  alterarOrdenacao(valor: 'crescente' | 'sorteio') {
    this.ordernacao = valor;
  }

  get resultadoJogo() {
    return this.ordernacao === 'crescente'
      ? this.resultado!.dezenas
      : this.resultado!.dezenasOrdemSorteio;
  }

  abrirModal(template: TemplateRef<any>, $event: Event) {
    $event.preventDefault();
    const config: ModalOptions<any> = {
      ignoreBackdropClick: true,
    };
    this.modalRef = this.modalService.show(template, config);
    console.log(this.resultado);
  }

  fecharModal() {
    this.modalRef?.hide();
  }
}
