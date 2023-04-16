import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRouter } from '../config/apiRouter';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class TeamService {
  constructor(private http: HttpClient) {}
  getTeam() {
    return this.http.get(apiRouter.getTeam) as Observable<any>;
  }
}
