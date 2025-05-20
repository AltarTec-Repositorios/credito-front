import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsultaCreditoComponent } from './consulta-credito.component';
import {CreditoService} from '../../services/credito.service';
import {of, throwError} from 'rxjs';

describe('ConsultaCreditoComponent', () => {
  let component: ConsultaCreditoComponent;
  let fixture: ComponentFixture<ConsultaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ConsultaCreditoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConsultaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve buscar o crédito e resetar a mensagem de erro quando buscarCredito for bem-sucedido', () => {
    const mockData = { id: 1, valor: 100 };
    const creditoService = TestBed.inject(CreditoService);
    spyOn(creditoService, 'getByNumeroCredito').and.returnValue(of(mockData));
    component.numeroCredito = '12345';

    component.buscarCredito();

    expect(creditoService.getByNumeroCredito).toHaveBeenCalledWith('12345');
    expect(component.credito).toEqual(mockData);
    expect(component.mensagemErro).toBe('');
  });

  it('deve definir a mensagem de erro e limpar o crédito quando buscarCredito falhar', () => {
    const creditoService = TestBed.inject(CreditoService);
    spyOn(creditoService, 'getByNumeroCredito').and.returnValue(throwError(() => new Error()));
    component.numeroCredito = '12345';

    component.buscarCredito();

    expect(creditoService.getByNumeroCredito).toHaveBeenCalledWith('12345');
    expect(component.credito).toBe('');
    expect(component.mensagemErro).toBe('❌  Nenhum crédito encontrado para o número: 12345');
  });

  it('não deve chamar o serviço e deve definir a mensagem de erro quando numeroCredito estiver vazio', () => {
    const creditoService = TestBed.inject(CreditoService);
    spyOn(creditoService, 'getByNumeroCredito');
    component.numeroCredito = '';

    component.buscarCredito();

    expect(creditoService.getByNumeroCredito).not.toHaveBeenCalled();
    expect(component.credito).toBe('');
    expect(component.mensagemErro).toBe('❌  Informe um número de crédito para a busca!');
  });

  it('deve limpar a mensagem de erro quando limparMensagem for chamado', () => {
    component.mensagemErro = 'mensagem de erro';

    component.limparMensagem();

    expect(component.mensagemErro).toBe('');
  });

});
