import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true
})
export class SidebarComponent {
  constructor(private router: Router) {}

  selectItem(item: { name: string }) {
    if (item.name === 'Usuario') {
      this.router.navigate(['/profile']);
    } else {
      console.log(`Seleccionaste: ${item.name}`);
    }
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
