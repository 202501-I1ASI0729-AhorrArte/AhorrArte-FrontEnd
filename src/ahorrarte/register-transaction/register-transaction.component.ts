import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";
import { TransactionService, UserTransaction } from "../../app/shared/services/transaction.service";

@Component({
  selector: 'app-register-transaction',
  templateUrl: './register-transaction.component.html',
  styleUrls: ['./register-transaction.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ToolbarComponent]
})
export class RegisterTransactionComponent implements OnInit {
  search = '';
  rowsPerPage = 4;
  currentPage = 1;
  apiTransactions: UserTransaction[] = [];
  isLoading = false;

  // Mantener datos de fallback por si falla la API
  fallbackTransactions = [
    { product: "Mercado", price: "S/ 120", details: "Ninguno" },
    { product: "Útiles de aseo", price: "S/ 120", details: "Ninguno" },
    { product: "Útiles escolares", price: "S/ 120", details: "Ninguno" },
    { product: "Recargas", price: "S/ 120", details: "Ninguno" },
  ];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    this.isLoading = true;
    this.transactionService.getUserTransactions().subscribe({
      next: (transactions) => {
        this.apiTransactions = transactions;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error cargando transacciones:', error);
        this.isLoading = false;
        if (error.status === 401 || error.status === 403) {
          console.log('Usuario no autenticado, usando datos de fallback');
        }
        // Si falla la API, usar datos de fallback
      }
    });
  }

  // Convertir datos de API al formato que espera el template
  get transactions() {
    if (this.apiTransactions.length > 0) {
      return this.apiTransactions.map(t => ({
        product: t.category || t.description,
        price: `S/ ${t.amount}`,
        details: t.description || "Ninguno"
      }));
    }
    return this.fallbackTransactions;
  }

  get filteredTransactions() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;

    // Filtrar primero por la búsqueda
    const filtered = this.transactions.filter(transaction =>
      transaction.product.toLowerCase().includes(this.search.toLowerCase())
    );

    return filtered.slice(start, end);
  }

  get totalTransactions() {
    // Reflejar el total de transacciones filtradas
    return this.transactions.filter(transaction =>
      transaction.product.toLowerCase().includes(this.search.toLowerCase())
    ).length;
  }

  get startRow() {
    return (this.currentPage - 1) * this.rowsPerPage + 1;
  }

  get endRow() {
    return Math.min(this.startRow + this.rowsPerPage - 1, this.totalTransactions);
  }

  goBack() {
    window.history.back(); // Navega a la página anterior
  }

  nextPage() {
    if (this.endRow < this.totalTransactions) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.startRow > 1) {
      this.currentPage--;
    }
  }

  handleRowsPerPageChange(event: any) {
    this.rowsPerPage = +event.target.value;
    this.currentPage = 1; // Reinicia la página al cambiar el tamaño de las filas
  }
}
