import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-form',
  templateUrl: './shift-form.component.html',
  styleUrl: './shift-form.component.css'
})
export class ShiftFormComponent implements OnInit {
  nombreCompleto: string = '';
  nombre: string = '';
  edad: string = '';
  dni: string = '';
  nacimiento: string = '';
  provincia: string = '';
  localidad: string = '';
  celular: string = '';
  pais: string = '';
  email: string = '';
  diagnostico: string = '';
  diaNacimiento: string = '';
  mesNacimiento: string = '';
  anioNacimiento: string = '';


  ngOnInit(): void {
    
  }
}
