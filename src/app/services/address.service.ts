import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiProv = 'https://apis.datos.gob.ar/georef/api'

  constructor(private http: HttpClient) { }

  getCountries() {
    return ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "España", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "Portugal", "Puerto Rico", "República Dominicana", "Uruguay", "Venezuela","Otro"];
  }
  getProvinciasName(): Observable<string[]> {
    return this.http.get<any>(this.apiProv + '/provincias').pipe(
      map(data => {
        return data.provincias.map((provincia: any) => provincia.nombre);
      })
    );
  }
  getLocalitiesByProvincia(provincia: string) {
    return this.http.get<any>(this.apiProv + '/localidades?provincia=' + provincia + '&campos=nombre&max=5000')
  }
}
