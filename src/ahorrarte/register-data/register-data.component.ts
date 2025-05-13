import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";
@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,ToolbarComponent] // Importamos FormsModule para usar [(ngModel)]
})
export class RegisterDataComponent {
  ingresos: number = 0;
  formasIngreso: string[] = ["Mensual", "Semanal", "Diario"];
  rowsPerPage: number = 4;
  currentPage: number = 1;
  formaSeleccionada: string = this.formasIngreso[0];

  gastosFijos = [
    { producto: "Mercado", precio: "S/ 120", detalles: "Ninguno" },
    { producto: "Útiles de aseo", precio: "S/ 120", detalles: "Ninguno" },
    { producto: "Útiles escolares", precio: "S/ 120", detalles: "Ninguno" },
    { producto: "Recargas", precio: "S/ 120", detalles: "Ninguno" }
  ];

  get totalGastosFijos(): number {
    return this.gastosFijos.length;
  }

  get startRow(): number {
    return (this.currentPage - 1) * this.rowsPerPage + 1;
  }

  get endRow(): number {
    return Math.min(this.startRow + this.rowsPerPage - 1, this.totalGastosFijos);
  }

  get paginatedGastosFijos() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    return this.gastosFijos.slice(start, end);
  }

  goBack() {
    window.history.back(); // Navegar hacia la página anterior
  }

  nextPage() {
    if (this.endRow < this.totalGastosFijos) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.startRow > 1) {
      this.currentPage--;
    }
  }
}
