import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const endpoint = `${environment.urlBase}api/employees`; // Utiliza la URL base del entorno
    return this.http.post(endpoint, userData);
  }
}
