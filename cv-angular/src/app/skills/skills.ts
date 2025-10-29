import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SkillsService } from '../services/skills.service'; // Asegúrate de crear este servicio

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit {
  skills: any[] = [];
  loading = true;
  error = '';

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.loading = true;
    this.skillsService.loadSkills().subscribe({
      next: data => {
        this.skills = data;
        this.loading = false;
      },
      error: err => {
        console.error('Error al cargar skills', err);
        this.error = 'No se pudieron cargar las habilidades.';
        this.loading = false;
      }
    });
  }

  getLevelText(level: number | string) {
    if (typeof level === 'string') return level;
    if (level < 40) return 'Beginner';
    if (level < 70) return 'Intermediate';
    return 'Advanced';
  }
}
