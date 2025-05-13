import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Asegúrate de tener este también
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";

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

  constructor(private router: Router) {}

  guardarTransaccion() {
    // Lógica para guardar la transacción
    console.log('Transacción guardada:', {
      producto: this.producto,
      precio: this.precio,
      detalles: this.sinDetalles ? 'Sin detalles' : this.detalles
    });
  }

  goBack() {
    this.router.navigate(['/']);  // Navega hacia atrás o a una ruta principal
  }
}
