import { Component } from '@angular/core';
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
}
