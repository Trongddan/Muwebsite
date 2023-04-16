import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { TeamService } from 'src/app/services/teamService';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'component-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent {
  listPlayer: any = null;
  isRegisterNewMember: any = false;
  team: any = null;
  username = '';
  password = '';
  confirmPassword = '';
  fullName = '';
  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private toast:ToastService
  ) {}
  getListAllPlayer() {
    return this.userService.getAllPlayer().subscribe(
      (res) => {
        this.listPlayer = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getTeam() {
    return this.teamService.getTeam().subscribe(
      (res) => (this.team = res),
      (err) => {
        console.log(err);
      }
    );
  }
  handleClickToAddnewMember() {
    this.isRegisterNewMember = true;
  }
  handleCloseToAddnewMember() {
    this.isRegisterNewMember = false;
  }
  handleRegisterMember() {
    const user = {
      username: this.username,
      password: this.password,
      fullName: this.fullName,
    };
    return this.userService.userAddMember(user).subscribe(
      (res) => {
        this.toast.success(res.mess)
        this.getListAllPlayer()
      },
      (err) => {
       this.toast.error(err.error.mess)

      }
    );
  }

  ngOnInit() {
    console.log("alo");
    console.log("Đây la thăng Nam");
    this.getListAllPlayer();
    this.getTeam();
  }
}
