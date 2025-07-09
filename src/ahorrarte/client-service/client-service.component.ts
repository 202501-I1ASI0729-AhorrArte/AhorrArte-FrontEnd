import { Component, OnInit } from '@angular/core';
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";
import { ConsultService, ConsultaAsesoria, UserConsult } from "../../app/shared/services/consult.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-service',
  standalone: true,
  imports: [
    ToolbarComponent,
    CommonModule
  ],
  templateUrl: './client-service.component.html',
  styleUrl: './client-service.component.css'
})
export class ClientServiceComponent implements OnInit {
  consultas: ConsultaAsesoria[] = [];
  userConsults: UserConsult[] = [];
  isLoading = false;

  constructor(private consultService: ConsultService) {}

  ngOnInit() {
    this.loadConsultas();
    this.loadUserConsults();
  }

  loadConsultas() {
    this.isLoading = true;
    this.consultService.getAllConsultas().subscribe({
      next: (consultas) => {
        this.consultas = consultas;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error cargando consultas:', error);
        this.isLoading = false;
      }
    });
  }

  loadUserConsults() {
    this.consultService.getUserConsults().subscribe({
      next: (userConsults) => {
        this.userConsults = userConsults;
      },
      error: (error) => {
        console.error('Error cargando consultas de usuario:', error);
      }
    });
  }

  createNewConsult(consultId: number) {
    this.consultService.createUserConsult(consultId).subscribe({
      next: (result) => {
        console.log('Consulta creada:', result);
        alert('Consulta creada exitosamente');
        this.loadUserConsults(); // Recargar la lista
      },
      error: (error) => {
        console.error('Error creando consulta:', error);
        if (error.status === 401 || error.status === 403) {
          alert('Sesión expirada. Por favor inicie sesión nuevamente.');
        } else {
          alert('Error al crear la consulta. Intente nuevamente.');
        }
      }
    });
  }
  goBack() {
    window.history.back();
  }
}
