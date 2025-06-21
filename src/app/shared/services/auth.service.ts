import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResponse, SignInResponse } from '../../authentication/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://ahorrarte-backend.onrender.com/api/v1/authentication';

  constructor(private http: HttpClient) {}
  // Método para registrar un usuario (sign-up)
  registerUser(userDetails: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/sign-up`, userDetails);
  }


  // Método para iniciar sesión (sign-in)
  loginUser(credentials: { username: string; password: string }): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(`${this.baseUrl}/sign-in`, credentials);
  }
}
