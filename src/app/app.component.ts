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
  alo: any = null;
  constructor(@Inject(DOCUMENT) document: Document,private dataService: DataService) {
    this.document = document;
  }
  ngOnInit() {

    const items = this.document.querySelectorAll('.item');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.isHeaderFixed = true;
        this.dataService.setData(this.isHeaderFixed)
      } else {
        this.isHeaderFixed = false;
        this.dataService.setData(this.isHeaderFixed)
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
