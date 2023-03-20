import {
  Component,
  EventEmitter,
  Output,
  ViewChild,

} from '@angular/core';

import { HeaderComponent } from 'src/app/components/header/header.component';

import { UserService } from 'src/app/services/userService';
import { userStorage } from 'src/app/utils/storage';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  @Output() onHandleCloseLogin = new EventEmitter();
  @Output() user= new EventEmitter<any>();
  subject = new BehaviorSubject(null);

  @ViewChild(HeaderComponent) child!: HeaderComponent;

  constructor(private userService: UserService) {}
  handleCloseLogin(param: boolean) {
    this.onHandleCloseLogin.emit(param);
  }
  //dang nhap
  userLogin() {
    this.userService
      .userLogin({ username: this.username, password: this.password })
      .subscribe(
        (res) => {
          userStorage(res);
          this.onHandleCloseLogin.emit(false);
          console.log(res.username);

          this.user.emit(res.username)
        },
        (err) => {
          console.log(err);
        }
      );

  }
  ngOnInit() {}
}
