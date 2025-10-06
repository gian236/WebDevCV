import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about">
      <h2>Biografía</h2>
      <p>
        Hola, soy Gian Paolo Robelo Ávila, estudiante de Computer Science en la
        Universidad Francisco Marroquín, Guatemala. Me apasiona el desarrollo
        web, el aprendizaje continuo y la tecnología.
      </p>
    </section>
  `
})
export class About {}
