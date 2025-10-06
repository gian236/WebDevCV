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

    <!-- NAV DE SECCIONES -->
    <nav class="cv-navbar">
      <button (click)="showSection('cv')" [class.active]="activeSection === 'cv'">
        <i class="bi bi-person-vcard"></i> CV
      </button>
      <button (click)="showSection('about')" [class.active]="activeSection === 'about'">
        <i class="bi bi-info-circle"></i> About
      </button>
      <button (click)="showSection('skills')" [class.active]="activeSection === 'skills'">
        <i class="bi bi-lightning-charge"></i> Skills
      </button>
      <button (click)="showSection('experience')" [class.active]="activeSection === 'experience'">
        <i class="bi bi-briefcase"></i> Experience
      </button>
    </nav>

    <main>
      <!-- SECCIÓN CV -->
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

      <!-- SECCIÓN ABOUT -->
      <div *ngIf="activeSection === 'about'">
        <app-about></app-about>
      </div>

      <!-- SECCIÓN SKILLS -->
      <div *ngIf="activeSection === 'skills'">
        <app-tecnologias></app-tecnologias>
        <app-soft-skills></app-soft-skills>
      </div>

      <!-- SECCIÓN EXPERIENCE -->
      <div *ngIf="activeSection === 'experience'">
        <app-experiencia></app-experiencia>
      </div>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  activeSection: 'cv' | 'about' | 'skills' | 'experience' = 'cv';

  showSection(section: 'cv' | 'about' | 'skills' | 'experience') {
    this.activeSection = section;
  }
}
