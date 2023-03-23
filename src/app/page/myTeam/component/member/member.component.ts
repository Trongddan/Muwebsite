import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/teamService';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'component-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent {
  listPlayer: any = null;
  team: any = null;
  constructor(
    private userService: UserService,
    private teamService: TeamService
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

  ngOnInit() {
    this.getListAllPlayer();
    this.getTeam();
  }
}
