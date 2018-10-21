import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  templateUrl: 'carousels.component.html',   providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ]
})
export class CarouselsComponent {

  myInterval: number = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;

  dataPenyakit:any = [
    {id:1,name:'Abdominal Aortic Aneurysm',local:'',DTD:6,sbbLocal:'Bacteria'},
    {id:2,name:'Acanthamoeba Infection',local:'',DTD:4,sbbLocal:'Virus'},
    {id:3,name:'ACE (Adverse Childhood Experiences)',local:'',DTD:5,sbbLocal:'Sosial'},
    {id:3,name:'Acinetobacter Infection',local:'',DTD:8,sbbLocal:'Virus'}
  ]

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  addSlide(): void {
    this.slides.push({
      image: `https://loremflickr.com/900/500/sailing?random=${this.slides.length % 8 + 1}/`
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

}
