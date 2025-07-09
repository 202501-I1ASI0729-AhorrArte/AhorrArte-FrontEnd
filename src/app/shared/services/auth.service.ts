import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User, UserResponse, SignInResponse } from '../../authentication/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://ahorrarte-backend.onrender.com/api/v1/authentication';
  private tokenKey = 'ahorrarte_token';
  private userKey = 'ahorrarte_user';

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario (sign-up)
  registerUser(userDetails: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/sign-up`, userDetails);
  }

  // Método para iniciar sesión (sign-in)
  loginUser(credentials: { username: string; password: string }): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(`${this.baseUrl}/sign-in`, credentials)
      .pipe(
        tap(response => {
          // Guardar token y datos del usuario
          this.setToken(response.token);
          this.setUser({
            id: response.id,
            username: response.username
          });
        })
      );
  }

  // Guardar token en localStorage
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Obtener token del localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Guardar datos del usuario
  private setUser(user: { id: number; username: string }): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  // Obtener datos del usuario
  getUser(): { id: number; username: string } | null {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Obtener ID del usuario actual
  getCurrentUserId(): number | null {
    const user = this.getUser();
    return user ? user.id : null;
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
}
