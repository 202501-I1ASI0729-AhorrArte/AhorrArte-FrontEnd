import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../authentication/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {}

  registerUser(userDetails: User): Observable<any> {
    return this.http.post(`${this.baseUrl}`, userDetails);
  }



  loginUser(credentials: { username: string; password: string }): Observable<any> {
    const { username, password } = credentials;
    return this.http.get<any[]>(`${this.baseUrl}?username=${username}&password=${password}`);
  }


  // Obtener usuario por email (si es necesario en otras partes del sistema)
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }
}
