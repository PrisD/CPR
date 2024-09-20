import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ok-display',
  templateUrl: './ok-display.component.html',
  styleUrl: './ok-display.component.css'
})
export class OkDisplayComponent {
  @Input() mostrar: boolean = false;

  cerrar() {
    this.mostrar = false;
  }
}
