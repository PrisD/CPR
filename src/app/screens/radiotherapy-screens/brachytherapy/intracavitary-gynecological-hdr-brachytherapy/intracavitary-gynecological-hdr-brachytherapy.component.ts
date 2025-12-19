import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intracavitary-gynecological-hdr-brachytherapy',
  templateUrl: './intracavitary-gynecological-hdr-brachytherapy.component.html',
  styleUrl: './intracavitary-gynecological-hdr-brachytherapy.component.css'
})
export class IntracavitaryGynecologicalHDRBrachytherapyComponent {

  constructor(private router: Router) { }

  goToBraquiInterstitial(){
    this.router.navigate(['\interstitial-gynecological-hdr-brachytherapy']);
  }

}
