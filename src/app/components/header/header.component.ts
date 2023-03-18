import { Component, Input } from '@angular/core';
@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Input() isFix: boolean=false;
  logoImg: string = 'assets/logo.png';
  ngOnChanges(){
    console.log(1);


  }
}
