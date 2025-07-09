import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface ConsultaAsesoria {
  id: number;
  title: string;
  description: string;
  status?: string;
  createdDate?: string;
}

export interface UserConsult {
  id: number;
  userId: number;
  consultId: number;
  status: string;
  createdDate?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultService {
  private baseUrl = 'https://ahorrarte-backend.onrender.com/api/v1';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Obtener todas las consultas de asesoría
  getAllConsultas(): Observable<ConsultaAsesoria[]> {
    return this.http.get<ConsultaAsesoria[]>(`${this.baseUrl}/consultas-asesoria`);
  }

  // Obtener consulta por ID
  getConsultaById(id: number): Observable<ConsultaAsesoria> {
    return this.http.get<ConsultaAsesoria>(`${this.baseUrl}/consultas-asesoria/${id}`);
  }

  // Gestión de consultas de usuario
  getUserConsults(): Observable<UserConsult[]> {
    return this.http.get<UserConsult[]>(`${this.baseUrl}/user_consults`);
  }

  createUserConsult(consultId: number): Observable<UserConsult> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) {
      throw new Error('Usuario no autenticado');
    }

    const userConsult = {
      id: 0,
      userId: userId,
      consultId: consultId,
      status: 'pending'
    };
    
    return this.http.post<UserConsult>(`${this.baseUrl}/user_consults`, userConsult);
  }

  getUserConsult(consultId: number): Observable<UserConsult> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) {
      throw new Error('Usuario no autenticado');
    }
    
    return this.http.get<UserConsult>(`${this.baseUrl}/user_consults/${userId}/${consultId}`);
  }

  deleteUserConsult(consultId: number): Observable<void> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) {
      throw new Error('Usuario no autenticado');
    }
    
    return this.http.delete<void>(`${this.baseUrl}/user_consults/${userId}/${consultId}`);
  }
}
