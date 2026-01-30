import { Component, OnInit, Input } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-shift-form',
  templateUrl: './shift-form.component.html',
  styleUrl: './shift-form.component.css'
})
export class ShiftFormComponent implements OnInit {
  @Input() notCordoba: boolean = false;
  @Input() isCordobaOnly: boolean = false;
  provinciasOptions: string[] = [];
  nombreCompleto: string = '';
  nombre: string = '';
  edad: string = '';
  dni: string = '';
  nacimiento: string = '';
  provincia: string = '';
  localidades: string[] = [];
  localidad: string = '';
  celular: string = '';
  pais: string = '';
  paises: string[] = []
  email: string = '';
  consulta: string = '';
  diaNacimiento: string = '';
  mesNacimiento: string = '';
  anioNacimiento: string = '';
  otro: string = '';
  mostrarModal = false;
  loadingLocalidades: boolean = false;
  enviandoEmail: boolean = false;

  constructor(
    public addressService: AddressService,
    private emailService: EmailService
  ) {

  }


  ngOnInit() {
    this.paises = this.addressService.getCountries();
    this.getProvincias();
    if (this.isCordobaOnly) {
      this.pais = 'Argentina';
      this.provincia = 'Córdoba';
      this.getLocalities('Córdoba');
    }

  }
  getProvincias() {
    this.addressService.getProvinciasName().subscribe(
      data => {
        this.provinciasOptions = this.sortStringsAlphabetically(data);
      },
      error => {
        console.error('Error al obtener provincias', error);
      }
    );
  }
  getLocalities(provinciaSeleccionada: string) {
    if (!provinciaSeleccionada) return;

    this.localidad = '';
    this.localidades = [];
    this.loadingLocalidades = true;

    const provinciaLimpia = this.normalizeString(provinciaSeleccionada);

    this.addressService.getLocalitiesByProvincia(provinciaLimpia).subscribe(
      response => {
        if (response && response.localidades) {
          this.localidades = this.sortStringsAlphabetically(
            response.localidades.map((local: { nombre: any; }) => local.nombre)
          );
        }
        this.loadingLocalidades = false;
        this.localidad = '';
      },
      error => {
        console.error('Error al obtener localidades', error);
        this.loadingLocalidades = false;
        this.localidad = '';
      }
    );
  }

  normalizeString(str: string): string {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  sortStringsAlphabetically(strings: string[]): string[] {
    return strings.sort((a, b) => a.localeCompare(b));
  }
  clear() {
    this.provincia = '';
    this.localidad = '';
    this.localidades = [];
  }


  onSubmit() {
    if (this.nombre && this.dni && this.celular && this.diaNacimiento &&
      this.mesNacimiento && this.anioNacimiento && this.pais && this.email &&
      (this.pais !== 'Otro' || this.otro) &&
      (this.pais !== 'Argentina' || (this.provincia && this.localidad))) {

      // Enviar email
      this.enviandoEmail = true;

      const formData = {
        nombre: this.nombre,
        dni: this.dni,
        celular: this.celular,
        diaNacimiento: this.diaNacimiento,
        mesNacimiento: this.mesNacimiento,
        anioNacimiento: this.anioNacimiento,
        pais: this.pais,
        provincia: this.provincia,
        localidad: this.localidad,
        otro: this.otro,
        email: this.email,
        consulta: this.consulta,
        notCordoba: this.notCordoba,
        isCordobaOnly: this.isCordobaOnly
      };


      this.emailService.sendShiftEmail(formData).subscribe(
        response => {
          console.log('Email enviado exitosamente', response);
          this.mostrarModal = true;
          this.enviandoEmail = false;
          this.limpiarFormulario();
        },
        error => {
          console.error('Error al enviar email', error);
          this.enviandoEmail = false;
          alert('Error al procesar tu solicitud. Por favor intenta de nuevo.');
        }
      );
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  limpiarFormulario() {
    this.nombre = '';
    this.dni = '';
    this.celular = '';
    this.diaNacimiento = '';
    this.mesNacimiento = '';
    this.anioNacimiento = '';
    this.pais = '';
    this.provincia = '';
    this.localidad = '';
    this.otro = '';
    this.email = '';
    this.consulta = '';
    this.localidades = [];
  }
}
