import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psycho-oncology',
  templateUrl: './psycho-oncology.component.html',
  styleUrl: './psycho-oncology.component.css'
})
export class PsychoOncologyComponent {

  constructor(private router: Router) { }

  goToMindfulness(){
    this.router.navigate(['\mindfulness-workshop']);
  }

  goToClinical(){
    this.router.navigate(['\clinical-psychology']);
  }

}
