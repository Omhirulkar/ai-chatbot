import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-sidebar',
  standalone: false,
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss'
})
export class UserSidebarComponent {
  constructor(private router: Router) {}

  logout() {
    // Add your logout logic here
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }

}
