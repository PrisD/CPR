import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-form',
  templateUrl: './shift-form.component.html',
  styleUrl: './shift-form.component.css'
})
export class ShiftFormComponent implements OnInit {
  provinciasOptions: string[] = [];
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
    this.provinciasOptions = [
      'Buenos Aires',
      'Catamarca',
      'Chaco',
      'Chubut',
      'Córdoba',
      'Corrientes',
      'Entre Ríos',
      'Formosa',
      'Jujuy',
      'La Pampa',
      'La Rioja',
      'Mendoza',
      'Misiones',
      'Neuquén',
      'Río Negro',
      'Salta',
      'San Juan',
      'San Luis',
      'Santa Cruz',
      'Santa Fe',
      'Santiago del Estero',
      'Tierra del Fuego',
      'Tucumán'
    ];
    
  }
}
