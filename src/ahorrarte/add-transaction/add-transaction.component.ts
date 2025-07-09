import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Asegúrate de tener este también
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";
import { TransactionService, UserTransaction } from "../../app/shared/services/transaction.service";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule,ToolbarComponent] // Asegúrate de importar FormsModule
})
export class AddTransactionComponent {
  producto = '';
  precio = 0;
  detalles = '';
  sinDetalles = false;

  constructor(private router: Router, private transactionService: TransactionService) {}

  guardarTransaccion() {
    // Crear objeto de transacción para la API
    const transaction = {
      amount: this.precio,
      description: this.sinDetalles ? 'Sin detalles' : this.detalles,
      category: this.producto
    };

    this.transactionService.createTransaction(transaction).subscribe({
      next: (response) => {
        console.log('Transacción guardada exitosamente:', response);
        alert('Transacción guardada correctamente');
        // Limpiar formulario
        this.producto = '';
        this.precio = 0;
        this.detalles = '';
        this.sinDetalles = false;
      },
      error: (error) => {
        console.error('Error al guardar transacción:', error);
        if (error.status === 401 || error.status === 403) {
          alert('Sesión expirada. Por favor inicie sesión nuevamente.');
        } else {
          alert('Error al guardar la transacción. Por favor intente nuevamente.');
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);  // Navega hacia atrás o a una ruta principal
  }
}
