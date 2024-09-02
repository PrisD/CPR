import { Component } from '@angular/core';

@Component({
  selector: 'app-radiotherapy',
  templateUrl: './radiotherapy.component.html',
  styleUrl: './radiotherapy.component.css'
})
export class RadiotherapyComponent {

  treatments = [
    { name: 'Braquiterapia HDR de Próstata', link: '/hdr-prostate-brachytherapy' },
    { name: 'Braquiterapia HDR Ginecológica Intracavitaria', link: '/intracavitary-gynecological-hdr-brachytherapy' },
    { name: 'Braquiterapia HDR Ginecológica Intersticial', link: '/interstitial-gynecological-hdr-brachytherapy' },
    { name: 'Braquiterapia HDR de Piel', link: '/hdr-skin-brachytherapy' },
    { name: 'IGRT Exactrac – Brainlab – Radioterapia Guiada por Imágenes', link: '/igrt-exactrac-brainlab-image-guided-radiotherapy' },
    { name: 'SBRT Exactrac –Radiocirugía Estereotáxica Corporal', link: '/sbrt-exactrac-body-stereotaxic-radiosurgery' },
    { name: 'SRS Exactrac – Radiocirugía Estereotáxica Craneal', link: '/srs-exactrac-cranial-stereotaxic-radiosurgery' },
    { name: 'Hybridarc Terapia Dinámica Volumétrica', link: '/hybridarc-volumetric-dynamic-therapy' },
    { name: 'IMRT – Radioterapia de Intensidad Modulada con Multiláminas', link: '/imrt-intensity-modulated-radiotherapy-with-multileaf' },
    { name: 'R3D – Radioterapia Tridimensional Conformada', link: '/r3-d-three-dimensional-conformal-radiotherapy' }
  ];

}
