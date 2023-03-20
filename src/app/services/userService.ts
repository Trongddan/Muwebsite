import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRouter } from '../config/apiRouter';
import {Observable} from "rxjs"
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {


  constructor(private http: HttpClient) {}
  // login
  userLogin(param:any){
    return this.http.post(apiRouter.login,param) as Observable<any>
  }
}
