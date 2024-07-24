import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent implements OnInit {
  imagenes: any[] | undefined;

  ngOnInit(): void {
    this.imagenes = [
      {
        itemImageSrc: '../assets/slides/bg-hero1.jpg'
      },
      {
        itemImageSrc: '../assets/slides/bg-hero3.jpg'
      },
      {
        itemImageSrc: '../assets/slides/bg-hero4.jpg'
      },
      {
        itemImageSrc: '../assets/slides/bg-hero5.jpg'
      },
      {
        itemImageSrc: '../assets/slides/bg-hero6.jpg'
      }
    ]
  }
}
