import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../services/nasa.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa.html',
  styleUrls: ['./nasa.css']
})
export class Nasa implements OnInit {
  apod: any = null;
  loading = true;
  error = '';
  darkMode = false;

  constructor(
    private nasaService: NasaService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.nasaService.getApod().subscribe({
      next: (data) => {
        this.apod = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar la imagen del día de la NASA.';
        this.loading = false;
      }
    });
  }
}
