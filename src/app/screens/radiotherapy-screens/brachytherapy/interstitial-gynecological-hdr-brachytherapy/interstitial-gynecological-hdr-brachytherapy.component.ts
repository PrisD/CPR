import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interstitial-gynecological-hdr-brachytherapy',
  templateUrl: './interstitial-gynecological-hdr-brachytherapy.component.html',
  styleUrl: './interstitial-gynecological-hdr-brachytherapy.component.css'
})
export class InterstitialGynecologicalHDRBrachytherapyComponent {

  constructor(private router: Router) { }

  goToBraquiIntracavitary(){
    this.router.navigate(['\intracavitary-gynecological-hdr-brachytherapy']);
  }

}
