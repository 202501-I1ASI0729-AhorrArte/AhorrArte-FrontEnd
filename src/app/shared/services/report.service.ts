import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InflationReport {
  id: number;
  title: string;
  content: string;
  inflationRate?: number;
  period?: string;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'https://ahorrarte-backend.onrender.com/api';

  constructor(private http: HttpClient) {}

  // Reportes de Inflación
  getAllReports(): Observable<InflationReport[]> {
    return this.http.get<InflationReport[]>(`${this.baseUrl}/reports`);
  }

  getReportById(id: number): Observable<InflationReport> {
    return this.http.get<InflationReport>(`${this.baseUrl}/reports/${id}`);
  }

  createReport(report: InflationReport): Observable<InflationReport> {
    return this.http.post<InflationReport>(`${this.baseUrl}/reports`, report);
  }

  updateReport(id: number, report: InflationReport): Observable<InflationReport> {
    return this.http.put<InflationReport>(`${this.baseUrl}/reports/${id}`, report);
  }

  deleteReport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/reports/${id}`);
  }

  // Asociar/Desasociar reportes con usuarios
  associateUserReport(userId: number, reportId: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/users/${userId}/reports/${reportId}`, {});
  }

  disassociateUserReport(userId: number, reportId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${userId}/reports/${reportId}`);
  }
}
