import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-register-transaction',
  templateUrl: './register-transaction.component.html',
  styleUrls: ['./register-transaction.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ToolbarComponent]
})
export class RegisterTransactionComponent {
  search = '';
  rowsPerPage = 4;
  currentPage = 1;

  transactions = [
    { product: "Mercado", price: "S/ 120", details: "Ninguno" },
    { product: "Útiles de aseo", price: "S/ 120", details: "Ninguno" },
    { product: "Útiles escolares", price: "S/ 120", details: "Ninguno" },
    { product: "Recargas", price: "S/ 120", details: "Ninguno" },
  ];

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
