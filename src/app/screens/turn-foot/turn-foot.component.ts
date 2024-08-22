import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turn-foot',
  templateUrl: './turn-foot.component.html',
  styleUrl: './turn-foot.component.css'
})
export class TurnFootComponent implements OnInit{
  @Input() title1: any = 'Contactanos y solicitá de manera simple tu turno'; 
  @Input() title2: string = 'en cualquiera de nuestras especialidades y tratamientos'; 
  @Input() direccion: string = '\shifts-options'
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToShifts(){
    this.router.navigate([this.direccion]);
  }

}
