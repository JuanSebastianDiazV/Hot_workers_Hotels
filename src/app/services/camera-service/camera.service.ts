import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  private apiUrl = 'https://your-backend-url/api/media';

  constructor(private http: HttpClient) {}

  saveMedia(media: { photos: any[]; videos: any[] }): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, media);
  }

  getMedia(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
