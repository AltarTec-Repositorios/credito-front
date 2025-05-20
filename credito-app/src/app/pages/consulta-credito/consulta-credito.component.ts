import { Component } from '@angular/core';
import { CreditoService } from '../../services/credito.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-credito',
  imports: [
    FormsModule,
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './consulta-credito.component.html',
  styleUrl: './consulta-credito.component.css'
})
export class ConsultaCreditoComponent {
  numeroCredito = '';
  credito: any ='';
  mensagemErro = '';

  constructor(private creditoService: CreditoService) {}

  buscarCredito() {
    if (this.numeroCredito === '') {
      this.mensagemErro = '❌  Informe um número de crédito para a busca!';
      return;
    }
    this.creditoService.getByNumeroCredito(this.numeroCredito).subscribe({
      next: (data) => {
        this.credito = data;
        this.mensagemErro = '';
      },
      error: () => {
        this.credito = '';
        this.mensagemErro = '❌  Nenhum crédito encontrado para o número: ' + this.numeroCredito;
      }
    });
  }

  limparMensagem() {
    this.mensagemErro = '';
  }
}
