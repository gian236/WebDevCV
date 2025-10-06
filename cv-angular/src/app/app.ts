import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Contacto } from './contacto/contacto';
import { Lenguajes } from './lenguajes/lenguajes';
import { Educacion } from './educacion/educacion';
import { Tecnologias } from './tecnologias/tecnologias';
import { SoftSkills } from './soft-skills/soft-skills';
import { Experiencia } from './experiencia/experiencia';
import { Download } from './download/download';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header, Contacto, Lenguajes,
    Educacion, Tecnologias, SoftSkills,
    Experiencia, Download, About
  ],
  template: `
    <app-header></app-header>

    <nav class="cv-navbar">
      <button (click)="showSection('cv')" [class.active]="activeSection === 'cv'">CV</button>
      <button (click)="showSection('about')" [class.active]="activeSection === 'about'">About</button>
      <button (click)="showSection('skills')" [class.active]="activeSection === 'skills'">Skills</button>
      <button (click)="showSection('experience')" [class.active]="activeSection === 'experience'">Experience</button>
    </nav>

    <main>
      <!-- CV -->
      <div *ngIf="activeSection === 'cv'" class="cv-grid">
        <div class="cv-column">
          <app-contacto></app-contacto>
          <app-lenguajes></app-lenguajes>
          <app-educacion></app-educacion>
        </div>
        <div class="cv-column">
          <app-tecnologias></app-tecnologias>
          <app-soft-skills></app-soft-skills>
          <app-experiencia></app-experiencia>
          <app-download></app-download>
        </div>
      </div>

      <!-- About -->
      <div *ngIf="activeSection === 'about'">
        <app-about></app-about>
      </div>

      <!-- Skills -->
      <div *ngIf="activeSection === 'skills'">
        <app-tecnologias></app-tecnologias>
        <app-soft-skills></app-soft-skills>
      </div>

      <!-- Experience con sub-secciones -->
      <div *ngIf="activeSection === 'experience'" class="experience-section">
        <div class="experience-nav">
          <button (click)="activeExperience = 'jobs'" [class.active]="activeExperience === 'jobs'">Jobs</button>
          <button (click)="activeExperience = 'studies'" [class.active]="activeExperience === 'studies'">Studies</button>
        </div>

        <div *ngIf="activeExperience === 'jobs'">
          <app-experiencia [view]="'jobs'"></app-experiencia>
        </div>

        <div *ngIf="activeExperience === 'studies'">
          <app-experiencia [view]="'studies'"></app-experiencia>
        </div>
      </div>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  activeSection: 'cv' | 'about' | 'skills' | 'experience' = 'cv';
  activeExperience: 'jobs' | 'studies' = 'jobs';

  showSection(section: 'cv' | 'about' | 'skills' | 'experience') {
    this.activeSection = section;
    if (section === 'experience') this.activeExperience = 'jobs'; // por defecto
  }
}
