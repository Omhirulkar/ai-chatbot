import { Component } from '@angular/core';

@Component({
  selector: 'app-website-footer',
  standalone: false,
  templateUrl: './website-footer.component.html',
  styleUrl: './website-footer.component.scss'
})
export class WebsiteFooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }


}
