import { Component } from '@angular/core';

@Component({
  selector: 'component-firstTeam',
  templateUrl: './firstTeam.component.html',
  styleUrls: ['./firstTeam.component.css'],
})
export class FirstTeamComponent {
  teamPlayer: any[] = [
    {
      name: 'bruno fernandes',
      img: 'assets/bruno.jpg',
      number: 18,
      position: 'mid',
    },
    {
      name: 'harry maguire',
      img: 'assets/maguire.jpg',
      number: 5,
      position: 'def',
    },
    {
      name: 'victor lindelof',
      img: 'assets/lindelof.jpg',
      number: 2,
      position: 'def',
    },
    {
      name: 'edison cavani',
      img: 'assets/cavani.jpg',
      number: 7,
      position: 'for',
    },
    {
      name: 'dean henderson',
      img: 'assets/goalKeeper.jpg',
      number: 26,
      position: 'gol',
    },
    {
      name: 'scott mctominay',
      img: 'assets/mctom.jpg',
      number: 25,
      position: 'mid',
    },
    {
      name: 'luke shaw',
      img: 'assets/shaw.jpg',
      number: 24,
      position: 'def',
    },
    {
      name: 'arron wan bissaka',
      img: 'assets/wanbisaka.jpg',
      number: 29,
      position: 'def',
    },
    {
      name: 'jadon sancho',
      img: 'assets/sancho.jpg',
      number: 26,
      position: 'for',
    },
    {
      name: 'marcus rashford',
      img: 'assets/rash4.jpg',
      number: 10,
      position: 'for',
    },
    {
      name: 'paul pogba',
      img: 'assets/paul.jpg',
      number: 6,
      position: 'mid',
    },
  ];
  gol: any = this.teamPlayer.find((item) => {
    return item.position === 'gol';
  });
  listDef: any = this.teamPlayer.filter((item) => {
    return item.position === 'def';
  });
  listMid: any = this.teamPlayer.filter((item) => {
    return item.position === 'mid';
  });
  listFor: any = this.teamPlayer.filter((item) => {
    return item.position === 'for';
  });
}
