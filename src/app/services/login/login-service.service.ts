import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import { AuthService } from '../auth-service/auth.service'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedIn = false;

  constructor(private http: HttpClient, private authService: AuthService) {}

  login(username: string, password: string, type: string = 'U'): Observable<any> {
    const endpoint = `${environment.urlBase}login`; // Utiliza la URL base del entorno
    const body = { username, password, type }; // Incluye el parámetro `type` en el cuerpo de la solicitud

    // Realiza la solicitud HTTP POST al endpoint
    return this.http.post(endpoint, body).pipe(
      tap((response: any) => {
        if (response.success) {
          this.loggedIn = true;
          localStorage.setItem('loggedIn', 'true'); // Guardar el estado en el almacenamiento local
          this.authService.setToken(response.token); // Guardar el token recibido del servidor
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn'); // Eliminar el estado del almacenamiento local
    this.authService.removeToken(); // Eliminar el token
    localStorage.clear();
    sessionStorage.clear();
  }
}
