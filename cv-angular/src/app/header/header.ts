import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  saludo = '';
  darkMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const hora = new Date().getHours();
    this.saludo =
      hora < 12 ? '¡Buenos días!' : hora < 18 ? '¡Buenas tardes!' : '¡Buenas noches!';

    this.themeService.darkMode$.subscribe((active) => (this.darkMode = active));
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
