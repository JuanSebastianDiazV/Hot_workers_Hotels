import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://3.137.39.122:8000/api/Employees';

  constructor(private http: HttpClient) {}

  saveEmployeeData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
