import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = `${environment.urlBase}api/employees`;

  constructor(private http: HttpClient) {}

  saveEmployeeData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Tipo de contenido
      'X-Origin': environment.origin, // Encabezado personalizado simulando el "Origin"
    });

    return this.http.post(this.apiUrl, data, { headers });
  }
}
