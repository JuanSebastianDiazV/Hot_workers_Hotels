import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeItemsService {
  private apiUrl = `${environment.urlBase}api/TimeItems`;

  constructor(private http: HttpClient) {}

  updateTimeItem(timeItemId: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/id/${timeItemId}`, data);
  }
}
