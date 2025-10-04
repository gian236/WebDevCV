import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnologias.html',
  styleUrls: ['./tecnologias.css']
})
export class Tecnologias {
  basesDeDatos: string[] = ['Redis', 'ElasticSearch', 'PostgreSQL', 'SQLite', 'MySQL', 'MongoDB'];
  contenedores: string[] = ['Docker'];
  diseno: string[] = ['Figma'];
  nube: string[] = ['AWS', 'S3', 'Azure'];
}
