import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = `${environment.urlBase}api/Employees`;

  constructor(private http: HttpClient) {}

  saveEmployeeData(part: string, data: any): Observable<any> {
    const payload = { part, data };
    return this.http.post(this.apiUrl, payload);
  }
}
