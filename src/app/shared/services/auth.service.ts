import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../authentication/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://172.211.129.172:8080/api/v1/authentication';

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario (sign-up)
  registerUser(userDetails: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/sign-up`, userDetails);
  }


  // Método para iniciar sesión (sign-in)
  loginUser(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/sign-in`, credentials);
  }


  // Obtener usuario por email (si es necesario en otras partes del sistema)
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }
}
