import { Component, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-website-header',
  standalone: false,
  templateUrl: './website-header.component.html',
  styleUrl: './website-header.component.scss'
})
export class WebsiteHeaderComponent implements AfterViewInit {
  isMenuOpen = false;
  
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('authButtons') authButtons!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    // Component initialization after view is ready
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const clickedInside = this.navbar.nativeElement.contains(event.target as Node);
    
    if (!clickedInside && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  // Close menu on window resize if switching to desktop view
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}