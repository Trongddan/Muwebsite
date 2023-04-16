import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DataService } from './services/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHeaderFixed: boolean = false;
  document: any = null;
  isLogin: boolean = false;
  constructor(
    @Inject(DOCUMENT) document: Document,
    private dataService: DataService
  ) {
    this.document = document;
  }
  ngOnInit() {
    const items = this.document.querySelectorAll('.item');


    document.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.isHeaderFixed = true;
      } else {
        this.isHeaderFixed = false;
      }
      items.forEach((item: any) => {
        if (item.offsetTop - window.scrollY < screen.availHeight - 200) {
          item.classList.add('active');
        }
      });
    });
  }
  onLogin(event: any) {
    this.isLogin = event;
  }
  ngAfterViewInit() {}
}
