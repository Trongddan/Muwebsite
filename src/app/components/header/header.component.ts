import { Component, Input, Output, EventEmitter,AfterViewInit } from '@angular/core';
import { getUserName } from 'src/app/utils/storage';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  c: any = null;
  subscription: Subscription;
  @Input() isFix: boolean = false;
  @Output() onHandleLogin = new EventEmitter();
  logoImg: string = 'assets/logo.png';
  handleLogin(param: any) {
    this.onHandleLogin.emit(param);
  }
  constructor(private dataService: DataService) {
    // Subscribe to data changes
    this.subscription = this.dataService.data$.subscribe(data => {
      this.c = data;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from data changes when component is destroyed
    this.subscription.unsubscribe();
  }

}
