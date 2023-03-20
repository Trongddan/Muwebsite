import { Component } from '@angular/core';

@Component({
  selector: 'component-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css'],
})
export class LengendComponent {
  legendPlayer: any[] = [
    {
      name: 'sir alex ferguson',
      img: 'assets/ferguson.jpg',
      number: 18,
    },
    {
      name: 'wayne Rooney',
      img: 'assets/rooney.jpg',
      number: 5,
    },
    {
      name: 'cristiano Ronaldo',
      img: 'assets/ronaldo.jpg',
      number: 5,
    },
    {
      name: 'david beckham',
      img: 'assets/beckham.jpg',
      number: 5,
    },
    {
      name: 'ryan giggs',
      img: 'assets/giggs.jpg',
      number: 5,
    },
    {
      name: 'eric catona',
      img: 'assets/catona.jpg',
      number: 5,
    },
  ];
}
