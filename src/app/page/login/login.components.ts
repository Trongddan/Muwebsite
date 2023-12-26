import { Component, EventEmitter, Output } from '@angular/core';

import { UserService } from 'src/app/services/userService';
import { userStorage } from 'src/app/utils/storage';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  @Output() onHandleCloseLogin = new EventEmitter();

  subject = new BehaviorSubject(null);

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}
  handleCloseLogin(param: boolean) {
    this.onHandleCloseLogin.emit(param);
    console.log(12);
    console.log(2);
    console.log(3);
  }
  //dang nhap
  userLogin() {
    this.userService
      .userLogin({ username: this.username, password: this.password })
      .subscribe(
        (res) => {
          userStorage(res);
          this.onHandleCloseLogin.emit(false);
          this.dataService.setData(res.username);
        },
        (err) => {
          console.log(err);
        }
      );

    // Set data in service
  }
  ngOnInit() {}
}
