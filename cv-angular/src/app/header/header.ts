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

  if (hora >= 6 && hora < 12) {
    this.saludo = '¡Buenos días!';
  } else if (hora >= 12 && hora < 18) {
    this.saludo = '¡Buenas tardes!';
  } else if (hora >= 18 && hora < 22) {
    this.saludo = '¡Buenas noches!';
  } else {
    this.saludo = '¡Buenas madrugadas!';
  }

  this.themeService.darkMode$.subscribe((active) => (this.darkMode = active));
}


  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
