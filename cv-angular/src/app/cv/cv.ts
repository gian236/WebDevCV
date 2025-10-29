import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../contacto/contacto';
import { Lenguajes } from '../lenguajes/lenguajes';
import { Educacion } from '../educacion/educacion';
import { Tecnologias } from '../tecnologias/tecnologias';
import { SoftSkills } from '../soft-skills/soft-skills';
import { Experiencia } from '../experiencia/experiencia';
import { Download } from '../download/download';
import { ThemeService } from '../theme.service'; 
import { HttpClientModule } from '@angular/common/http';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Contacto,
    Lenguajes,
    Educacion,
    Tecnologias,
    SoftSkills,
    Experiencia,
    Download, 
    Skills
  ],
  providers: [ThemeService],
  template: `
    <div class="cv-grid">
      <div class="cv-column">
        <app-contacto></app-contacto>
        <app-lenguajes></app-lenguajes>
        <app-educacion></app-educacion>
        <app-skills></app-skills>
      </div>
      <div class="cv-column">
        <app-tecnologias></app-tecnologias>
        <app-soft-skills></app-soft-skills>
        <app-experiencia></app-experiencia>
        <app-download></app-download>
      </div>
    </div>
  `,
  styleUrls: ['./cv.css']
})
export class CV {}
