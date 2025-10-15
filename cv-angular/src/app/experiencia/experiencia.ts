import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './experiencia.html',
  styleUrls: ['./experiencia.css']
})
export class Experiencia {
  experienciaVisible = true;
  view: 'jobs' | 'studies' = 'jobs';
  items: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 🔹 Carga los datos iniciales según la ruta
    this.route.data.subscribe(data => {
      this.view = data['view'] || 'jobs';
      this.loadItems();
    });
  }

  loadItems() {
    if (this.view === 'jobs') {
      this.items = [
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
    } else {
      this.items = [
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

  toggleItem(item: any) {
    item.abierto = !item.abierto;
  }

  toggleExperiencia() {
    this.experienciaVisible = !this.experienciaVisible;
  }
}
