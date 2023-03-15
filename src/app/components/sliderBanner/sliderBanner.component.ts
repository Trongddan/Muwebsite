import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'component-slide',
  templateUrl: './sliderBanner.component.html',
  styleUrls: ['./sliderBanner.component.css'],
})
export class SliderBanner {
  index: number = 0;
  @ViewChild('sliderContainer') mySlider!: ElementRef;
  @ViewChild('bannerItem') banner!: ElementRef;

  autoNext: any = null;
  listArrayBanner: string[] = [
    'assets/banner3.webp',
    'assets/banner2.jpg',
    'assets/banner1.webp',
  ];

  ngOnInit() {
    this.autoNext = setInterval(() => this.handleAutoNext(), 3000);

  }
  handleTransferSlide(index: number) {
    const slider = this.mySlider.nativeElement;
    const banner = this.banner.nativeElement;
    slider.scrollLeft = index * banner.clientWidth;
    this.index = index;
    clearInterval(this.autoNext);
    this.autoNext = setInterval(() => this.handleAutoNext(), 3000);
  }
  getStyleIndex(index: number) {
    if (index === this.index) {
      let style = {
        background: 'salmon',
      };
      return style;
    } else {
      return;
    }
  }
  handleAutoNext() {
    this.index++;
    if(this.index===3){
      this.index=0
    }
    this.handleTransferSlide(this.index);

  }

  ngDestroyed() {
    clearInterval(this.autoNext);
  }
}
