import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SidebarComponent} from "../../../public/components/sidebar/sidebar.component";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  subscribe() {
    // Implementar la lógica para suscribirse
    console.log('User subscribed to the newsletter');

  }

}
