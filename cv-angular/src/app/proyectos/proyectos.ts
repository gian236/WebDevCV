import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubService } from '../services/github.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class Proyectos implements OnInit {
  repos: any[] = [];
  loading = true;
  error = '';
  darkMode = false;

  constructor(
    private githubService: GitHubService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // Suscribirse al modo oscuro global
    this.themeService.darkMode$.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    // Cargar repositorios de GitHub
    this.githubService.getRepos().subscribe({
      next: (repos: any[]) => {
        this.repos = repos.slice(0, 6); // Mostrar los primeros 6
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar los proyectos desde GitHub.';
        this.loading = false;
      }
    });
  }
}
