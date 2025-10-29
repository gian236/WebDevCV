import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {
  saludo = '';
  darkMode = false;

  // Usamos inject() en lugar de constructor para Angular 20
  private themeService = inject(ThemeService);

  ngOnInit() {
    // Determinar saludo según hora
    const hora = new Date().getHours();
    if (hora >= 6 && hora < 12) {
      this.saludo = '¡Buenos días!';
    } else if (hora >= 12 && hora < 18) {
      this.saludo = '¡Buenas tardes!';
    } else if (hora >= 18 && hora < 22) {
      this.saludo = '¡Buenas noches!';
    } else {
      this.saludo = '¡Buenas madrugadas!';
    }

    // Suscribirse al estado de modo oscuro
    this.themeService.darkMode$.subscribe((active: boolean) => {
      this.darkMode = active;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
