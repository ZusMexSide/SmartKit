import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.page.html',
  styleUrls: ['./slideshow.page.scss'],
})
export class SlideshowPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {
      img: 'assets/img/slide2.png',
      titulo: 'Utiliza tu Smartphone',
      parrafo: 'Administre su Hogar usando<br>su Smartphone'
    },
    {
      img: 'assets/img/slide1.png',
      titulo: 'Utiliza tu Smartphone',
      parrafo: 'Administre su Hogar usando <br> su Smartphone'
    },
    {
      img: 'assets/img/slide3.png',
      titulo: 'Utiliza tu Smartphone',
      parrafo: 'Administre su Hogar usando <br> su Smartphone'
    }
  ]

}
