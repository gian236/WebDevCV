import { Component } from '@angular/core';
import { Header } from './header/header';
import { Contacto } from './contacto/contacto';
import { Lenguajes } from './lenguajes/lenguajes';
import { Educacion } from './educacion/educacion';
import { Tecnologias } from './tecnologias/tecnologias';
import { SoftSkills } from './soft-skills/soft-skills';
import { Experiencia } from './experiencia/experiencia';
import { Download } from './download/download';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, Contacto, Lenguajes,
    Educacion, Tecnologias, SoftSkills,
    Experiencia, Download
  ],
  template: `
    <app-header></app-header>
    <div class="cv-grid">
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
  `,
  styleUrl: './app.css'
})
export class App {}
