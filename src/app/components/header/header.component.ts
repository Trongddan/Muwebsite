import { Component, Input, Output, EventEmitter,AfterViewInit } from '@angular/core';
import { getUserName } from 'src/app/utils/storage';
@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username: any = null;
  @Input() isFix: boolean = false;
  @Output() onHandleLogin = new EventEmitter();
  logoImg: string = 'assets/logo.png';
  handleLogin(param: any) {
    this.onHandleLogin.emit(param);
  }
  ngOnInit() {
    const username = localStorage.getItem('username');
    if (username) {
      this.username = username; // Chuyển đổi sang kiểu number
    }
  }
  onUser(c:any){
    this.username=c
  }
}
