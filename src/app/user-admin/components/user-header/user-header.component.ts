import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-user-header',
  standalone: false,
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss'
})
export class UserHeaderComponent {
   @Input() isSidebarCollapsed: boolean = false;  // <-- Add This Line

  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

}
