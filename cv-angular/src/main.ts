import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations'; // <--- importar

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // conservar los providers existentes
    provideAnimations()             // <--- habilitar animaciones
  ]
}).catch((err) => console.error(err));
