import { of, throwError } from 'rxjs';
import { CreditoService } from '../../services/credito.service';
import { ConsultaNfseComponent } from './consulta-nfse.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ConsultaNfseComponent', () => {
  let component: ConsultaNfseComponent;
  let fixture: ComponentFixture<ConsultaNfseComponent>;
  let creditoServiceMock: jasmine.SpyObj<CreditoService>;

  beforeEach(async () => {
    creditoServiceMock = jasmine.createSpyObj('CreditoService', ['getByNumeroNfse']);

    await TestBed.configureTestingModule({
      imports: [ConsultaNfseComponent],
      providers: [{ provide: CreditoService, useValue: creditoServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaNfseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve buscar créditos com sucesso quando buscar é chamado com um numeroNfse válido', () => {
    const mockData = [{ id: 1, valor: 100 }];
    creditoServiceMock.getByNumeroNfse.and.returnValue(of(mockData));
    component.numeroNfse = '12345';

    component.buscar();

    expect(creditoServiceMock.getByNumeroNfse).toHaveBeenCalledWith('12345');
    expect(component.creditos).toEqual(mockData);
    expect(component.mensagemErro).toBe('');
  });

  it('deve definir uma mensagem de erro quando buscar é chamado e nenhum crédito é encontrado', () => {
    creditoServiceMock.getByNumeroNfse.and.returnValue(throwError(() => new Error()));
    component.numeroNfse = '12345';

    component.buscar();

    expect(creditoServiceMock.getByNumeroNfse).toHaveBeenCalledWith('12345');
    expect(component.creditos).toEqual([]);
    expect(component.mensagemErro).toBe('❌  Nenhum crédito encontrado para o número da NFS-e: 12345');
  });

  it('deve limpar a mensagem de erro quando limparMensagem é chamado', () => {
    component.mensagemErro = 'mensagem de erro';

    component.limparMensagem();

    expect(component.mensagemErro).toBe('');
  });
});
