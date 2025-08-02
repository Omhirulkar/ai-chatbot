import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-sidebar',
  standalone: false,
  templateUrl: './master-sidebar.component.html',
  styleUrl: './master-sidebar.component.scss'
})
export class MasterSidebarComponent {
 constructor(private router: Router) {}

  logout() {
    // Add your logout logic here
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }
}
