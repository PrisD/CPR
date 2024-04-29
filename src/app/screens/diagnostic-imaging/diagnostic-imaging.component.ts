import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostic-imaging',
  templateUrl: './diagnostic-imaging.component.html',
  styleUrl: './diagnostic-imaging.component.css'
})
export class DiagnosticImagingComponent {

  constructor(private router: Router) { }

  goToDiagnosticTurns(){
    this.router.navigate(['\shifts-diagnosis-by-imaging']);
  }

}
