import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {ToolbarComponent} from "../../../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    ToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  userName: string = 'Dante';
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
