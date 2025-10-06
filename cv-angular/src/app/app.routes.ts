import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Tecnologias } from './tecnologias/tecnologias';
import { SoftSkills } from './soft-skills/soft-skills';
import { Experiencia } from './experiencia/experiencia';

export const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cv', component: App }, // CV completo
  { path: 'about', component: About },
  { path: 'skills', component: Tecnologias }, // puedes combinar SoftSkills si quieres
  { path: 'experience', component: Experiencia },
];
