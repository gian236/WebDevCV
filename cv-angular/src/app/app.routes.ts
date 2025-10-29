import { Routes } from '@angular/router';
import { CV } from './cv/cv';
import { About } from './about/about';
import { Tecnologias } from './tecnologias/tecnologias';
import { SoftSkills } from './soft-skills/soft-skills';
import { Experiencia } from './experiencia/experiencia';

export const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cv', component: CV },
  { path: 'about', component: About },
  { path: 'skills', component: SoftSkills },

  {
    path: 'experience',
    children: [
      { path: '', redirectTo: 'jobs', pathMatch: 'full' }, // redirige por defecto a /experience/jobs
      { path: 'jobs', component: Experiencia, data: { view: 'jobs' } },
      { path: 'studies', component: Experiencia, data: { view: 'studies' } },
    ]
  },

  { path: '**', redirectTo: 'cv' } // opcional: redirección por si el usuario pone una ruta inválida
];
