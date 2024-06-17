import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turn-foot',
  templateUrl: './turn-foot.component.html',
  styleUrl: './turn-foot.component.css'
})
export class TurnFootComponent {
  
  constructor(private router: Router) { }

  goToShifts(){
    this.router.navigate(['\shifts-options']);
  }

}
