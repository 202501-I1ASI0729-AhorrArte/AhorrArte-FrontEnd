import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { FinancialService, FinancialEducation, FinancialData } from '../../app/shared/services/financial.service';

@Component({
  selector: 'app-app-recomendation',
  templateUrl: './app-recomendation.component.html',
  styleUrls: ['./app-recomendation.component.css'],
  standalone: true,
  imports: [CommonModule, ToolbarComponent]
})
export class AppRecomendationComponent implements OnInit {
  financialEducationContent: FinancialEducation[] = [];
  financialData: FinancialData[] = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private financialService: FinancialService) {}

  ngOnInit() {
    this.loadFinancialEducation();
    this.loadFinancialData();
  }

  loadFinancialEducation() {
    this.isLoading = true;
    this.financialService.getAllFinancialEducation().subscribe({
      next: (education) => {
        this.financialEducationContent = education;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error cargando educación financiera:', error);
        this.isLoading = false;
        // Datos de fallback si la API falla
        this.financialEducationContent = [
          {
            id: 1,
            title: "Fundamentos del Ahorro",
            content: "Aprende los conceptos básicos para comenzar a ahorrar efectivamente.",
            category: "Básico",
            difficulty: "Fácil"
          },
          {
            id: 2,
            title: "Inversiones para Principiantes",
            content: "Guía introductoria sobre diferentes opciones de inversión.",
            category: "Intermedio",
            difficulty: "Medio"
          }
        ];
      }
    });
  }

  loadFinancialData() {
    this.financialService.getAllFinancialData().subscribe({
      next: (data) => {
        this.financialData = data;
      },
      error: (error) => {
        console.error('Error cargando datos financieros:', error);
      }
    });
  }

  get paginatedContent() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.financialEducationContent.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.financialEducationContent.length / this.itemsPerPage);
  }

  goBack() {
    window.history.back();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
