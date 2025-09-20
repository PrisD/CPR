import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent implements OnInit, OnDestroy {
  imagenes = [
    { src: 'assets/slides/bg-hero1.jpg' },
    { src: 'assets/slides/bg-hero3.jpg' },
    { src: 'assets/slides/bg-hero4.jpg' },
    { src: 'assets/slides/bg-hero5.jpg' },
    { src: 'assets/slides/bg-hero6.jpg' }
  ];
  private headerBackgrounds: NodeListOf<Element> | undefined;
  imageIndex: number = 0;
  private intervalId: any;
  private userInteracted: boolean = false;

  ngOnInit(): void {
    this.headerBackgrounds = document.querySelectorAll(".background");
    this.startCarousel();
  }

  private startCarousel(): void {
    this.intervalId = setInterval(() => {
      if (!this.userInteracted) {
        this.changeBackground();
      } else {
        this.userInteracted = false; // Reiniciar la bandera de interacción del usuario
      }
    }, 3000);
  }

  private changeBackground(): void {
    if (this.headerBackgrounds) {
      this.headerBackgrounds[this.imageIndex].classList.remove("showing");
      this.imageIndex = (this.imageIndex + 1) % this.headerBackgrounds.length;
      this.headerBackgrounds[this.imageIndex].classList.add("showing");
    }
  }

  setActiveIndex(index: number): void {
    if (this.headerBackgrounds) {
      this.userInteracted = true; // Indica que el usuario interactuó
      this.headerBackgrounds[this.imageIndex].classList.remove("showing");
      this.imageIndex = index;
      this.headerBackgrounds[this.imageIndex].classList.add("showing");
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}