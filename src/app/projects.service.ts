import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projects } from './projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsUrl = 'https://vast-citadel-94035.herokuapp.com/projects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getProjects (): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.projectsUrl)
}
}