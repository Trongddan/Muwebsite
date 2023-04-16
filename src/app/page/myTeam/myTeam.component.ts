import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Nav {
  name: string;
  url: string;
  id: number;
}

@Component({
  selector: 'component-myteam',
  templateUrl: './myTeam.component.html',
  styleUrls: ['./myTeam.component.css'],
})
export class MyTeamComponent {
  isActivated: number = 0;
  listNav: Nav[] = [
    { name: 'Thành viên', url: 'member', id: 0 },
    { name: 'Quản lý', url: 'manage', id: 1 },
    { name: 'Lịch thi đấu', url: 'calendar', id: 2 },
    {name:'Vote',url:'vote',id:3}
  ];
  constructor(private router: Router) {}
  handleClickNav(id:number){
    this.isActivated=id
  }
  ngOnInit() {}
}
