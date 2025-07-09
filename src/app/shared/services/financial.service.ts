import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FinancialEducation {
  id: number;
  title: string;
  content: string;
  category?: string;
  difficulty?: string;
  createdDate?: string;
}

export interface FinancialData {
  id: number;
  type: string;
  value: number;
  description?: string;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  private baseUrl = 'https://ahorrarte-backend.onrender.com/api';

  constructor(private http: HttpClient) {}

  // Educación Financiera
  getAllFinancialEducation(): Observable<FinancialEducation[]> {
    return this.http.get<FinancialEducation[]>(`${this.baseUrl}/finantial-education`);
  }

  getFinancialEducationById(id: number): Observable<FinancialEducation> {
    return this.http.get<FinancialEducation>(`${this.baseUrl}/finantial-education/${id}`);
  }

  createFinancialEducation(education: FinancialEducation): Observable<FinancialEducation> {
    return this.http.post<FinancialEducation>(`${this.baseUrl}/finantial-education`, education);
  }

  updateFinancialEducation(id: number, education: FinancialEducation): Observable<FinancialEducation> {
    return this.http.put<FinancialEducation>(`${this.baseUrl}/finantial-education/${id}`, education);
  }

  deleteFinancialEducation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/finantial-education/${id}`);
  }

  // Datos Financieros
  getAllFinancialData(): Observable<FinancialData[]> {
    return this.http.get<FinancialData[]>(`${this.baseUrl}/finantial-data`);
  }

  getFinancialDataById(id: number): Observable<FinancialData> {
    return this.http.get<FinancialData>(`${this.baseUrl}/finantial-data/${id}`);
  }

  createFinancialData(data: FinancialData): Observable<FinancialData> {
    return this.http.post<FinancialData>(`${this.baseUrl}/finantial-data`, data);
  }

  updateFinancialData(id: number, data: FinancialData): Observable<FinancialData> {
    return this.http.put<FinancialData>(`${this.baseUrl}/finantial-data/${id}`, data);
  }

  deleteFinancialData(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/finantial-data/${id}`);
  }
}
