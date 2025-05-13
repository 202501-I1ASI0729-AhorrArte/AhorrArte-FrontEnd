import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SidebarComponent} from "../../../public/components/sidebar/sidebar.component";

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  subscribe() {
    // Implementar la lógica para suscribirse
    console.log('User subscribed to the newsletter');

  }

}
