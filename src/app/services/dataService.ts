import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<String>("");
  public data$ = this.dataSubject;

  constructor() { }

  setData(data: any) {
    this.dataSubject.next(data);
  }

  getData(): any {
    return this.data$.getValue();
  }
}
