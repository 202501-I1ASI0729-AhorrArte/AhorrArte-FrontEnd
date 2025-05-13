import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {SidebarComponent} from "../../../public/components/sidebar/sidebar.component";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  constructor(private viewportScroller: ViewportScroller, private router: Router) {}


  toggleFAQ(index: number) {
    var answers = document.querySelectorAll('.faq-answer');
    var answer = answers[index] as HTMLElement;
    var displayStyle = window.getComputedStyle(answer).display;
    answer.style.display = displayStyle === 'none' ? 'block' : 'none';
  }

  subscribe() {
    // Implementar la lógica para suscribirse
    console.log('User subscribed to the newsletter');

  }

}
