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

  // Método para obtener el ID del usuario
  getUserId(): string {
    return localStorage.getItem('userId') || '';
  }

  // Método para guardar el ID del usuario
  setUserId(userId: string): void {
    localStorage.setItem('userId', userId);
  }

  // Método para eliminar el ID del usuario
  removeUserId(): void {
    localStorage.removeItem('userId');
  }
}
