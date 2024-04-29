import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gynecological-hdr-brachytherapy',
  templateUrl: './gynecological-hdr-brachytherapy.component.html',
  styleUrl: './gynecological-hdr-brachytherapy.component.css'
})
export class GynecologicalHDRBrachytherapyComponent {

  constructor(private router: Router) { }

  goToBraquiIntersitial(){
    this.router.navigate(['\interstitial-gynecological-hdr-brachytherapy']);

  }

  goToBraquiIntracavitary(){
    this.router.navigate(['\intracavitary-gynecological-hdr-brachytherapy']);
  }

}
