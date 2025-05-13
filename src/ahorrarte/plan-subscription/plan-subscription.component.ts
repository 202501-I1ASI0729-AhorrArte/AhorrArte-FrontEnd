import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-plan-subscription',
  standalone: true,
  imports: [CommonModule, MatButtonModule,ToolbarComponent],
  templateUrl: './plan-subscription.component.html',
  styleUrls: ['./plan-subscription.component.css']
})
export class PlanSubscriptionComponent {
  // Aquí puedes agregar lógica si es necesario
}
