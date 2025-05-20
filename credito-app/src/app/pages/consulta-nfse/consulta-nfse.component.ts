import { Component } from '@angular/core';
import { CreditoService } from '../../services/credito.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-nfse',
  imports: [
    FormsModule,
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './consulta-nfse.component.html',
  styleUrl: './consulta-nfse.component.css'
})
export class ConsultaNfseComponent {
  numeroNfse = '';
  creditos: any[] = [];
  mensagemErro = '';

  constructor(private creditoService: CreditoService) {}

  buscar() {
    this.creditoService.getByNumeroNfse(this.numeroNfse).subscribe({
      next: (data) => {
        this.creditos = data;
        this.mensagemErro = '';
      },
      error: () => {
        this.creditos = [];
        this.mensagemErro = '❌  Nenhum crédito encontrado para o número da NFS-e: ' + this.numeroNfse;
      }
    });
  }

  limparMensagem() {
    this.mensagemErro = '';
  }
}
