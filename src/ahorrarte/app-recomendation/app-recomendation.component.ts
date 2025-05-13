import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-app-recomendation',
  templateUrl: './app-recomendation.component.html',
  styleUrls: ['./app-recomendation.component.css'],
  standalone: true,
  imports: [CommonModule, ToolbarComponent]
})
export class AppRecomendationComponent {

  goBack() {
    window.history.back();
  }

  nextPage() {
    // Lógica de cambio de página si es necesario
  }

  prevPage() {
    // Lógica de cambio de página si es necesario
  }
}
