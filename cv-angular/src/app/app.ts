import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, Header],
  template: `
    <app-header></app-header>

    <nav class="cv-navbar">
      <button routerLink="/cv" routerLinkActive="active">CV</button>
      <button routerLink="/about" routerLinkActive="active">About</button>
      <button routerLink="/skills" routerLinkActive="active">Skills</button>
      <button routerLink="/experience" routerLinkActive="active">Experience</button>
    </nav>

    <!-- Submenú de Experience -->
    <div class="experience-nav" *ngIf="currentRoute.includes('experience')">
      <button routerLink="/experience/jobs" routerLinkActive="active">Jobs</button>
      <button routerLink="/experience/studies" routerLinkActive="active">Studies</button>
    </div>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  currentRoute = ''; // ✅ propiedad que usará el *ngIf

  constructor(private router: Router) {
    // Escucha los cambios de ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
}
