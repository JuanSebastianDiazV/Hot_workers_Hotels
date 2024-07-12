import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedIn = false;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Simulamos una solicitud POST
    const endpoint = 'https://example.com/api/login'; // URL ficticia para el endpoint
    const body = { username, password };

    // Datos hardcodeados para simular la respuesta del servidor
    const users = [
      { id: 1, name: 'cesarMolina1', password: 'password123' },
      { id: 2, name: 'javierUrbina1', password: 'password123' },
    ];

    const user = users.find(
      (user) => user.name === username && user.password === password
    );

    if (user) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true'); // Guardar el estado en el almacenamiento local
      return of({ success: true, user });
    } else {
      return of({
        success: false,
        message: 'Usuario o contraseña incorrectos',
      });
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn'); // Eliminar el estado del almacenamiento local
    localStorage.clear();
    sessionStorage.clear();
  }
}
