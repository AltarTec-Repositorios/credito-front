import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  private API_URL = 'http://localhost:8080/api/creditos';

  constructor(private http: HttpClient) {}

  getByNumeroNfse(numeroNfse: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/${numeroNfse}`);
  }

}
