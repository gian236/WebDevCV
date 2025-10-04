import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducacionItem {
  anio: string;       // usamos 'anio' en lugar de 'año'
  institucion: string;
  titulo: string;
}

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educacion.html',
  styleUrls: ['./educacion.css']
})
export class Educacion {
  educacion: EducacionItem[] = [
    {
      anio: '2023 - 2026',
      institucion: 'Universidad Francisco Marroquín',
      titulo: 'Licenciatura en Computer Science'
    },
    {
      anio: '2011 - 2022',
      institucion: 'Colegio Decroly Americano',
      titulo: 'Bachillerato en Ciencias y Letras | High School'
    }
  ];
}
