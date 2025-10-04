import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  saludo = '';
  darkMode = false;

  ngOnInit() {
    const hora = new Date().getHours();
    if (hora < 12) this.saludo = '¡Buenos días!';
    else if (hora < 18) this.saludo = '¡Buenas tardes!';
    else this.saludo = '¡Buenas noches!';
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
  }
}
