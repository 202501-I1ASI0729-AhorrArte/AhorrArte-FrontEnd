import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';  // Importa el CommonModule

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [CommonModule,SidebarComponent]
})
export class ToolbarComponent {
  isSidebarVisible = false;

  constructor(private router: Router) {}

  navigateToMainPage() {
    this.router.navigate(['/']);
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
