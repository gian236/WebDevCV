import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soft-skills.html',
  styleUrls: ['./soft-skills.css']
})
export class SoftSkills {
  searchTerm: string = '';

  skills: string[] = [
    'Trabajo en equipo', 'Resolución de problemas', 'Adaptabilidad',
    'Comunicación', 'Organización', 'Gestión del tiempo',
    'Curiosidad', 'Aprendizaje continuo', 'Pensamiento crítico', 'Liderazgo'
  ];

  get filteredSkills(): string[] {
    if (!this.searchTerm.trim()) return this.skills;
    const term = this.searchTerm.toLowerCase();
    return this.skills.filter(skill => skill.toLowerCase().includes(term));
  }

  // Método para resaltar coincidencias con <mark>
  highlight(skill: string, term: string): string {
    if (!term) return skill;
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    return skill.replace(regex, `<mark>$1</mark>`);
  }
}
