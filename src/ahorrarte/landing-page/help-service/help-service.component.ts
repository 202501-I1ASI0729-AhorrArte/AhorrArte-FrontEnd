import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SidebarComponent} from "../../../public/components/sidebar/sidebar.component";

@Component({
  selector: 'app-help-service',
  standalone: true,
  imports: [
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './help-service.component.html',
  styleUrl: './help-service.component.css'
})
export class HelpServiceComponent {
  subscribe() {
    // Implementar la lógica para suscribirse
    console.log('User subscribed to the newsletter');

  }

}
