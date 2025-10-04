import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  private isBrowser: boolean;

  constructor() {
    // comprobamos que estamos en el navegador (no en SSR)
    this.isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

    if (this.isBrowser) {
      const saved = localStorage.getItem('darkMode');
      if (saved === 'true') {
        this.enableDarkMode();
      }
    }
  }

  toggleTheme() {
    const current = this.darkModeSubject.value;
    if (current) this.disableDarkMode();
    else this.enableDarkMode();
  }

  private enableDarkMode() {
    if (!this.isBrowser) return;

    document.body.classList.add('dark-mode');
    this.darkModeSubject.next(true);
    localStorage.setItem('darkMode', 'true');
  }

  private disableDarkMode() {
    if (!this.isBrowser) return;

    document.body.classList.remove('dark-mode');
    this.darkModeSubject.next(false);
    localStorage.setItem('darkMode', 'false');
  }
}
