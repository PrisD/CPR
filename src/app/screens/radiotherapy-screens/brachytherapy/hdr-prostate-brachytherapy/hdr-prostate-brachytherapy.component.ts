import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hdr-prostate-brachytherapy',
  templateUrl: './hdr-prostate-brachytherapy.component.html',
  styleUrl: './hdr-prostate-brachytherapy.component.css'
})
export class HDRProstateBrachytherapyComponent {
  showMoreInfo: boolean = false;

  constructor(private router: Router) {}

  toggleMoreInfo(): void {
    this.showMoreInfo = !this.showMoreInfo;
  }

  goToBraquiIntracavitary(): void {
    this.router.navigate(['/brachytherapy-intracavitary']);
  }

  goToBraquiInterstitial(): void {
    this.router.navigate(['/brachytherapy-interstitial']);
  }
}
