import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SidebarComponent} from "../../../public/components/sidebar/sidebar.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  subscribe() {
    // Implementar la lógica para suscribirse
    console.log('User subscribed to the newsletter');

  }


}
