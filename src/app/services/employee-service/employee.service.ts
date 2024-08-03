import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.urlBase}api/Employees`;

  constructor(private http: HttpClient) {}

  saveEmployeeData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
