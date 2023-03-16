import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHeaderFixed: boolean = false;
  document: any = null;
  alo: any = null;
  constructor(@Inject(DOCUMENT) document: Document) {
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
        if (item.offsetTop - window.scrollY < screen.availHeight) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });
  }
  ngAfterViewInit() {}
}
