import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map').setView([-33.1323781, 	-64.3501335], 15); // Coordenadas ajustadas

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Configurar el icono del marcador estándar
    const icon = L.icon({
      iconUrl: 'assets/images/marcador-de-posicion.png', 
      iconSize: [30, 30], // tamaño del icono
      iconAnchor: [12, 41], // punto del icono que corresponde a la posición del marcador
      popupAnchor: [1, -34], // donde debe estar el popup en relación con el icono
      shadowSize: [41, 41] // tamaño de la sombra
    });

    L.marker([-33.1323781, 	-64.3501335], { icon: icon }).addTo(map)
      .openPopup();
  }
}
