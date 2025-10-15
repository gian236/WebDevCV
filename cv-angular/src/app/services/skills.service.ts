import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private skillsSubject = new BehaviorSubject<any[]>([]);
  skills$ = this.skillsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadSkills(): Observable<any[]> {
    if (this.skillsSubject.value.length) {
      return this.skills$; // Retorna datos guardados si ya existen
    }

    this.http.get<any[]>('http://localhost:3001/skills')
      .pipe(catchError(err => {
        console.error('Error cargando skills', err);
        return of([]);
      }))
      .subscribe(data => this.skillsSubject.next(data));

    return this.skills$;
  }
}
