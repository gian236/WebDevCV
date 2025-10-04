import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrls: ['./experiencia.css'],
  animations: [
    trigger('expandCollapse', [
      state('open', style({
        height: '*',
        opacity: 1,
        padding: '*'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        padding: '0px'
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class Experiencia {
  experienciaVisible = true;

  experiencia = [
    {
      titulo: 'Startup Jungle - Desarrollador Backend',
      periodo: 'Jun 2024 - Actualidad',
      descripcion: 'Desarrollo backend con Python y FastAPI, gestión de bases de datos PostgreSQL, despliegues en AWS.',
      open: false
    },
    {
      titulo: 'Tech Solutions GT - Practicante Backend',
      periodo: 'Ene 2023 - May 2024',
      descripcion: 'Soporte en desarrollo backend, manejo de APIs y bases de datos.',
      open: false
    }
  ];

  toggleExperiencia() {
    this.experienciaVisible = !this.experienciaVisible;
  }

  toggleItem(item: any) {
    item.open = !item.open;
  }
}
