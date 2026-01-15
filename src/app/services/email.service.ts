import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private serviceID = 'service_48fikqi';
  private templateID = 'template_g8edjuo';
  private publicKey = '-u_qhDyBAXVas-Wpo';

  private readonly MAILS = {
    LOCAL: 'rrii@radioterapia-rio4.com.ar',      // Río Cuarto y zona
    AFUERA: 'cpaulos@radioterapia-rio4.com.ar',   // Otras provincias
    SALUD_MENTAL: 'vdelcueto@radioterapia-rio4.com.ar' // Psicología y Diagnóstico
  };

  constructor() {
    emailjs.init(this.publicKey);
  }

  sendShiftEmail(formData: any): Observable<any> {

    const destinatarioReal = this.determinarDestinatario(formData);

    const templateParams = {
      ...formData,
      to_email: destinatarioReal,
      fecha_completa: `${formData.diaNacimiento}/${formData.mesNacimiento}/${formData.anioNacimiento}`
    };

    return from(emailjs.send(this.serviceID, this.templateID, templateParams));
  }

  private determinarDestinatario(data: any): string {
    if (data.notCordoba) {
      return this.MAILS.AFUERA;
    }
    if (data.isCordobaOnly || data.provincia === 'Córdoba') {
      return this.MAILS.LOCAL;
    }

    return this.MAILS.SALUD_MENTAL;
  }
}
