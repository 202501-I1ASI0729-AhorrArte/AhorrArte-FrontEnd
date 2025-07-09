import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface UserTransaction {
  id?: number;
  userId: number;
  amount: number;
  description: string;
  category?: string;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'https://ahorrarte-backend.onrender.com/api/v1';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Crear nueva transacción
  createTransaction(transaction: Omit<UserTransaction, 'userId'>): Observable<UserTransaction> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) {
      throw new Error('Usuario no autenticado');
    }

    const transactionWithUser = { ...transaction, userId };
    return this.http.post<UserTransaction>(`${this.baseUrl}/user-transactions`, transactionWithUser);
  }

  // Obtener transacciones del usuario autenticado
  getUserTransactions(): Observable<UserTransaction[]> {
    const userId = this.authService.getCurrentUserId();
    console.log(userId);
    if (!userId) {
      throw new Error('Usuario no autenticado');
    }

    return this.http.get<UserTransaction[]>(`${this.baseUrl}/user-transactions/${userId}`);
  }
}
