import { Component } from '@angular/core';
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-client-service',
  standalone: true,
  imports: [
    ToolbarComponent
  ],
  templateUrl: './client-service.component.html',
  styleUrl: './client-service.component.css'
})
export class ClientServiceComponent {
  goBack() {
    window.history.back();
  }
}
