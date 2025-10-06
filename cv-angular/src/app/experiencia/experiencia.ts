import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrls: ['./experiencia.css']
})
export class Experiencia {
  experienciaVisible = true;

  // Input para seleccionar vista: 'jobs' o 'studies'
  @Input() view: 'jobs' | 'studies' = 'jobs';

  // Array de estudios fijos
  studies = [
    {
      titulo: 'Computer Science - Universidad Francisco Marroquín',
      descripcion: 'Licenciatura en Computer Science',
      abierto: false
    },
    {
      titulo: 'Curso de Angular',
      descripcion: 'Aprendizaje práctico de Angular 20',
      abierto: false
    }
  ];

  // Jobs que vendrán del DataService
  jobs: { titulo: string; descripcion: string; abierto: boolean }[] = [];

  constructor(private dataService: DataService) {
    // Inicializamos jobs desde el servicio
    this.jobs = dataService.jobs.map(job => ({
      titulo: job,
      descripcion: 'Descripción pendiente...',
      abierto: false
    }));
  }

  toggleItem(item: any) {
    item.abierto = !item.abierto;
  }

  toggleExperiencia() {
    this.experienciaVisible = !this.experienciaVisible;
  }

  // Filtrar items según la vista
  get filteredItems() {
    if (this.view === 'jobs') {
      return this.jobs;
    } else {
      return this.studies;
    }
  }
}
