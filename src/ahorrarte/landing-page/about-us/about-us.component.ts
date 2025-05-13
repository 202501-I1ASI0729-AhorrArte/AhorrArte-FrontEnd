import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {SidebarComponent} from "../../../public/components/sidebar/sidebar.component";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  constructor(private viewportScroller: ViewportScroller, private router: Router) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  subscribe() {
    // Implementar la lógica para suscribirse
    console.log('User subscribed to the newsletter');

  }

}
