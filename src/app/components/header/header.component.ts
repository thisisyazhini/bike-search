import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  imports: [RouterLink],
})
export class HeaderComponent implements OnInit {
  currentTheme: 'autumn' | 'dracula' = 'autumn';

  private renderer = inject(Renderer2);

  ngOnInit() {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme as 'autumn' | 'dracula';
      this.applyTheme();
    } else {
      // Check system preference
      const prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      this.currentTheme = prefersDarkScheme.matches ? 'dracula' : 'autumn';
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'autumn' ? 'dracula' : 'autumn';
    this.applyTheme();
  }

  private applyTheme() {
    // Save theme preference
    localStorage.setItem('theme', this.currentTheme);

    // Apply theme to document
    if (this.currentTheme === 'dracula') {
      this.renderer.setAttribute(
        document.documentElement,
        'data-theme',
        'dracula'
      );
    } else {
      this.renderer.setAttribute(
        document.documentElement,
        'data-theme',
        'autumn'
      );
    }
  }
}
