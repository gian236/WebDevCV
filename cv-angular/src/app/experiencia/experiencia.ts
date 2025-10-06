import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrls: ['./experiencia.css']
})
export class Experiencia {
  experienciaVisible = true;

  // ✅ Nuevo Input para seleccionar vista: 'jobs' o 'studies'
  @Input() view: 'jobs' | 'studies' = 'jobs';

  items = [
    {
      titulo: 'Startup Jungle - Desarrollador Backend (Jun 2024 - Actualidad)',
      descripcion: 'Desarrollo backend con Python y FastAPI, gestión de bases de datos PostgreSQL, despliegues en AWS.',
      abierto: false
    },
    {
      titulo: 'Tech Solutions GT - Practicante Backend (Ene 2023 - May 2024)',
      descripcion: 'Soporte en desarrollo backend, manejo de APIs y bases de datos.',
      abierto: false
    }
  ];

  toggleItem(item: any) {
    item.abierto = !item.abierto;
  }

  toggleExperiencia() {
    this.experienciaVisible = !this.experienciaVisible;
  }

  // ✅ Filtro para mostrar solo jobs o studies
  get filteredItems() {
    if (this.view === 'jobs') {
      return this.items.filter(item => item.titulo.includes('Backend') || item.titulo.includes('Dev'));
    } else {
      // aquí podrías agregar items de estudios si los tienes
      return [
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
    }
  }
}
