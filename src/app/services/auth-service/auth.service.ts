import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Método para obtener el token de autenticación
  getToken(): string {
    return localStorage.getItem('authToken') || '';
  }

  // Método para guardar el token de autenticación
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para eliminar el token de autenticación
  removeToken(): void {
    localStorage.removeItem('authToken');
  }
}
