import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private banksUrl = 'assets/mocks/banks.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getBanks(): Observable<{ id: string, name: string }[]> {
    return this.http.get<{ id: string, name: string }[]>(this.banksUrl);
  }
}
