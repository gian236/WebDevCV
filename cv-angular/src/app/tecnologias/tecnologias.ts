import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnologias.html',
  styleUrls: ['./tecnologias.css']
})
export class Tecnologias implements OnInit {
  // Arrays de tecnologías existentes
  basesDeDatos: string[] = ['Redis', 'ElasticSearch', 'PostgreSQL', 'SQLite', 'MySQL', 'MongoDB'];
  contenedores: string[] = ['Docker'];
  diseno: string[] = ['Figma'];
  nube: string[] = ['AWS', 'S3', 'Azure'];

  // Skills desde DataService
  skills: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Traemos los skills desde el servicio compartido
    this.skills = this.dataService.skills;
  }
}
