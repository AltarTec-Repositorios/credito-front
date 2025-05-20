import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {CreditoService} from './credito.service';
import {TestBed} from '@angular/core/testing';

describe('CreditoService', () => {
  let service: CreditoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreditoService]
    });
    service = TestBed.inject(CreditoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch credits successfully for a valid numeroNfse', () => {
    const mockResponse = [{ id: 1, valor: 100 }];
    const numeroNfse = '12345';

    service.getByNumeroNfse(numeroNfse).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service['API_URL']}/${numeroNfse}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should return an empty array when no credits are found', () => {
    const numeroNfse = '12345';

    service.getByNumeroNfse(numeroNfse).subscribe((response) => {
      expect(response).toEqual([]);
    });

    const req = httpMock.expectOne(`${service['API_URL']}/${numeroNfse}`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should handle an error response from the server', () => {
    const numeroNfse = '12345';

    service.getByNumeroNfse(numeroNfse).subscribe({
      next: () => fail('Expected an error, but got a response'),
      error: (error) => {
        expect(error.status).toBe(500);
      }
    });

    const req = httpMock.expectOne(`${service['API_URL']}/${numeroNfse}`);
    expect(req.request.method).toBe('GET');
    req.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });
  });
});
