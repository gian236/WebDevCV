import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Repo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly apiUrl = 'https://api.github.com/users/gian236/repos';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.apiUrl).pipe(
      map((repos: Repo[]) => repos.sort((a, b) => b.stargazers_count - a.stargazers_count))
    );
  }
}
