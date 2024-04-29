import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psychology',
  templateUrl: './psychology.component.html',
  styleUrl: './psychology.component.css'
})
export class PsychologyComponent {

  constructor(private router: Router) { }

  goToPsychologyTurns(){
    this.router.navigate(['\shifts-psychology']);
  }


}
