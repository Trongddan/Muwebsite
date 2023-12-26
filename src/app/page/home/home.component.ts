import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'component-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  document:any=null
constructor(@Inject(DOCUMENT) document : Document){
this.document=document
}
ngOnInit(){
  const items = this.document.querySelectorAll('.item');
  document.addEventListener('scroll', () => {
    items.forEach((item: any) => {
      if (item.offsetTop - window.scrollY < screen.availHeight) {
        item.classList.add('active');
        console.log(123);
      }
    });
  });
}

}
