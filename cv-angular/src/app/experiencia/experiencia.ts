import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../pipes/capitalize.pipe'; // 🔹 importa el pipe

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, CapitalizePipe], // 🔹 agrega el pipe aquí
  templateUrl: './experiencia.html',
  styleUrls: ['./experiencia.css']
})
export class Experiencia {
  experienciaVisible = true;

  @Input() view: 'jobs' | 'studies' = 'jobs';

  items = [
    {
      titulo: 'Startup Jungle - Desarrollador Backend (Jun 2024 - Actualidad)',
      descripcion: 'desarrollo backend con python y fastapi, gestión de bases de datos postgresql, despliegues en aws.',
      abierto: false
    },
    {
      titulo: 'Tech Solutions GT - Practicante Backend (Ene 2023 - May 2024)',
      descripcion: 'soporte en desarrollo backend, manejo de apis y bases de datos.',
      abierto: false
    }
  ];

  toggleItem(item: any) {
    item.abierto = !item.abierto;
  }

  toggleExperiencia() {
    this.experienciaVisible = !this.experienciaVisible;
  }

  get filteredItems() {
    if (this.view === 'jobs') {
      return this.items.filter(item => item.titulo.includes('Backend') || item.titulo.includes('Dev'));
    } else {
      return [
        {
          titulo: 'Computer Science - Universidad Francisco Marroquín',
          descripcion: 'licenciatura en computer science',
          abierto: false
        },
        {
          titulo: 'Curso de Angular',
          descripcion: 'aprendizaje práctico de angular 20',
          abierto: false
        }
      ];
    }
  }
}
